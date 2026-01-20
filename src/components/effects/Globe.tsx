import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GlobeProps {
    className?: string;
}

export default function Globe({ className }: GlobeProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const isHovering = useRef(false);

    useEffect(() => {
        let phi = 0;
        let width = 0;
        const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
        window.addEventListener('resize', onResize)
        onResize()

        if (!canvasRef.current) return;

        // Coordinates
        const locationIndia: [number, number] = [12.9716, 77.5946]; // Bangalore
        const locationDubai: [number, number] = [25.2048, 55.2708]; // Dubai
        const locationUSA_SF: [number, number] = [37.7595, -122.4367]; // San Francisco
        const locationUSA_NY: [number, number] = [40.7128, -74.006]; // New York
        const locationLondon: [number, number] = [51.5074, -0.1278]; // London
        const locationTokyo: [number, number] = [35.6762, 139.6503]; // Tokyo
        const locationSingapore: [number, number] = [1.3521, 103.8198]; // Singapore
        const locationSydney: [number, number] = [-33.8688, 151.2093]; // Sydney

        // Helper to create dotted lines between points
        const createArc = (start: [number, number], end: [number, number], steps = 30) => {
            const markers = [];
            const [lat1, lon1] = start;
            const [lat2, lon2] = end;

            let dLon = lon2 - lon1;
            if (dLon > 180) dLon -= 360;
            if (dLon < -180) dLon += 360;

            for (let i = 1; i < steps; i++) {
                const t = i / steps;
                const lat = lat1 + (lat2 - lat1) * t;
                const lon = lon1 + dLon * t;
                // Increased size slightly to 0.015 from 0.01 to make "visible connected"
                markers.push({ location: [lat, lon], size: 0.015 });
            }
            return markers;
        };

        const connectionMarkers = [
            // Core Network - Connecting major hubs
            ...createArc(locationIndia, locationDubai, 20),
            ...createArc(locationDubai, locationUSA_SF, 50),
            ...createArc(locationUSA_SF, locationUSA_NY, 15),
            ...createArc(locationUSA_NY, locationLondon, 30),
            ...createArc(locationLondon, locationIndia, 35), // Completing the loop

            // Asian / Pacific Network
            ...createArc(locationIndia, locationSingapore, 15),
            ...createArc(locationSingapore, locationTokyo, 20),
            ...createArc(locationTokyo, locationUSA_SF, 50), // Trans-Pacific connection
            ...createArc(locationSingapore, locationSydney, 30),
        ];

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: Math.min(window.devicePixelRatio, 2), // Performance optimization
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0.25,
            dark: 0.2, // Darker base for contrast
            diffuse: 0.8, // More definition
            mapSamples: 12000,
            mapBrightness: 1.5, // Balanced brightness
            baseColor: [1, 1, 1],
            markerColor: [0.1, 0.5, 1], // Sharper blue
            glowColor: [0.85, 0.9, 1],
            markers: [
                // Major Hubs with larger size
                { location: locationIndia, size: 0.06 },
                { location: locationDubai, size: 0.05 },
                { location: locationUSA_SF, size: 0.05 },
                { location: locationUSA_NY, size: 0.05 },
                { location: locationLondon, size: 0.05 },
                { location: locationTokyo, size: 0.05 },
                { location: locationSingapore, size: 0.05 },
                { location: locationSydney, size: 0.05 },

                // Connection dots
                ...connectionMarkers
            ],
            onRender: (state) => {
                // Rotate only when hovering
                if (isHovering.current) {
                    phi += 0.005;
                }

                state.phi = phi;
                state.width = width * 2
                state.height = width * 2
            },
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <div
            className={cn("relative w-full aspect-square flex items-center justify-center", className)}
            onMouseEnter={() => (isHovering.current = true)}
            onMouseLeave={() => (isHovering.current = false)}
        >
            <canvas
                ref={canvasRef}
                style={{ width: '100%', height: '100%', maxWidth: "600px", aspectRatio: 1 }}
                className="w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
        </div>
    );
}
