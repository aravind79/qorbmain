import { useEffect, useRef, useCallback } from 'react';

interface InteractiveDotsProps {
  backgroundColor?: string;
  dotColor?: string;
  gridSpacing?: number;
  animationSpeed?: number;
  removeWaveLine?: boolean;
  className?: string;
  isSection?: boolean;
}

interface Dot {
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  phase: number;
}

interface Ripple {
  x: number;
  y: number;
  time: number;
  intensity: number;
}

const InteractiveDots = ({
  backgroundColor = '#f8fafc',
  dotColor = '#3b82f6',
  gridSpacing = 22,
  animationSpeed = 0.01,
  removeWaveLine = false,
  className = '',
  isSection = false,
}: InteractiveDotsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timeRef = useRef(0);
  const animationFrameId = useRef<number | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, isDown: false });
  const ripples = useRef<Ripple[]>([]);
  const dotsRef = useRef<Dot[]>([]);
  const dprRef = useRef(1);

  const getMouseInfluence = (x: number, y: number) => {
    const dx = x - mouseRef.current.x;
    const dy = y - mouseRef.current.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = 120;
    return Math.max(0, 1 - distance / maxDistance);
  };

  const getRippleInfluence = (x: number, y: number, currentTime: number) => {
    let totalInfluence = 0;
    ripples.current.forEach((ripple) => {
      const age = currentTime - ripple.time;
      const maxAge = 2000;
      if (age < maxAge) {
        const dx = x - ripple.x;
        const dy = y - ripple.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const rippleRadius = (age / maxAge) * 250;
        const rippleWidth = 80;
        if (Math.abs(distance - rippleRadius) < rippleWidth) {
          const rippleStrength = (1 - age / maxAge) * ripple.intensity;
          const proximityToRipple = 1 - Math.abs(distance - rippleRadius) / rippleWidth;
          totalInfluence += rippleStrength * proximityToRipple;
        }
      }
    });
    return Math.min(totalInfluence, 2.5);
  };

  const initializeDots = useCallback(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!canvas || !container) return;
    
    const canvasWidth = container.clientWidth;
    const canvasHeight = container.clientHeight;
    const dots: Dot[] = [];
    
    for (let x = gridSpacing / 2; x < canvasWidth; x += gridSpacing) {
      for (let y = gridSpacing / 2; y < canvasHeight; y += gridSpacing) {
        dots.push({
          x,
          y,
          originalX: x,
          originalY: y,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }
    dotsRef.current = dots;
  }, [gridSpacing]);

  const resizeCanvas = useCallback(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!canvas || !container) return;
    
    const dpr = window.devicePixelRatio || 1;
    dprRef.current = dpr;
    const displayWidth = container.clientWidth;
    const displayHeight = container.clientHeight;
    
    canvas.width = displayWidth * dpr;
    canvas.height = displayHeight * dpr;
    canvas.style.width = displayWidth + 'px';
    canvas.style.height = displayHeight + 'px';
    
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
    }
    initializeDots();
  }, [initializeDots]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = e.clientY - rect.top;
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    const container = containerRef.current;
    if (!container || e.touches.length === 0) return;
    const rect = container.getBoundingClientRect();
    const touch = e.touches[0];
    mouseRef.current.x = touch.clientX - rect.left;
    mouseRef.current.y = touch.clientY - rect.top;
  }, []);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    mouseRef.current.isDown = true;
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ripples.current.push({
      x,
      y,
      time: Date.now(),
      intensity: 2.5,
    });
    const now = Date.now();
    ripples.current = ripples.current.filter((ripple) => now - ripple.time < 2000);
  }, []);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    const container = containerRef.current;
    if (!container || e.touches.length === 0) return;
    const rect = container.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    mouseRef.current.x = x;
    mouseRef.current.y = y;
    ripples.current.push({
      x,
      y,
      time: Date.now(),
      intensity: 2.5,
    });
  }, []);

  const handleMouseUp = useCallback(() => {
    mouseRef.current.isDown = false;
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.x = -1000;
    mouseRef.current.y = -1000;
  }, []);

  const animate = useCallback(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!canvas || !container) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    timeRef.current += animationSpeed;
    const currentTime = Date.now();
    const canvasWidth = container.clientWidth;
    const canvasHeight = container.clientHeight;
    
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    
    dotsRef.current.forEach((dot) => {
      const mouseInfluence = getMouseInfluence(dot.originalX, dot.originalY);
      const rippleInfluence = getRippleInfluence(dot.originalX, dot.originalY, currentTime);
      const totalInfluence = mouseInfluence + rippleInfluence;
      
      dot.x = dot.originalX;
      dot.y = dot.originalY;
      
      const baseDotSize = 1.5;
      const dotSize = baseDotSize + totalInfluence * 4 + Math.sin(timeRef.current + dot.phase) * 0.5;
      
      const baseOpacity = 0.2;
      const opacity = Math.min(0.8, baseOpacity + totalInfluence * 0.4 + Math.abs(Math.sin(timeRef.current * 0.5 + dot.phase)) * 0.1);
      
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
      
      const red = Number.parseInt(dotColor.slice(1, 3), 16);
      const green = Number.parseInt(dotColor.slice(3, 5), 16);
      const blue = Number.parseInt(dotColor.slice(5, 7), 16);
      ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
      ctx.fill();
    });
    
    if (!removeWaveLine) {
      ripples.current.forEach((ripple) => {
        const age = currentTime - ripple.time;
        const maxAge = 2000;
        if (age < maxAge) {
          const progress = age / maxAge;
          const radius = progress * 250;
          const alpha = (1 - progress) * 0.4 * ripple.intensity;
          
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${Number.parseInt(dotColor.slice(1, 3), 16)}, ${Number.parseInt(dotColor.slice(3, 5), 16)}, ${Number.parseInt(dotColor.slice(5, 7), 16)}, ${alpha})`;
          ctx.lineWidth = 2;
          ctx.arc(ripple.x, ripple.y, radius, 0, 2 * Math.PI);
          ctx.stroke();
        }
      });
    }
    
    animationFrameId.current = requestAnimationFrame(animate);
  }, [backgroundColor, dotColor, removeWaveLine, animationSpeed]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    resizeCanvas();
    
    const handleResize = () => resizeCanvas();
    window.addEventListener('resize', handleResize);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('touchmove', handleTouchMove);
    container.addEventListener('touchstart', handleTouchStart);
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchstart', handleTouchStart);
      
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
      timeRef.current = 0;
      ripples.current = [];
      dotsRef.current = [];
    };
  }, [animate, resizeCanvas, handleMouseMove, handleMouseDown, handleMouseUp, handleMouseLeave, handleTouchMove, handleTouchStart]);

  return (
    <div
      ref={containerRef}
      className={`${isSection ? 'absolute' : 'fixed'} inset-0 w-full h-full overflow-hidden ${className}`}
      style={{ backgroundColor }}
    >
      <canvas ref={canvasRef} className="block w-full h-full touch-none" />
    </div>
  );
};

export default InteractiveDots;
