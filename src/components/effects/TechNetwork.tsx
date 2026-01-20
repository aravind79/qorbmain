import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface TechNetworkProps {
    className?: string;
}

export default function TechNetwork({ className }: TechNetworkProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const isHovering = useRef(false);

    useEffect(() => {
        let phi = 0;
        let width = 0;
        const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
        window.addEventListener('resize', onResize)
        onResize()

        if (!canvasRef.current) return;

        // Generate extensive network nodes (randomized but consistent)
        // This simulates a global mesh of devices/servers
        const generateNetworkNodes = (count: number) => {
            const nodes = [];
            for (let i = 0; i < count; i++) {
                // Random lat/lon
                const lat = (Math.random() - 0.5) * 170;
                const lon = (Math.random() - 0.5) * 360;
                nodes.push({ location: [lat, lon], size: 0.01 + Math.random() * 0.02 });
            }
            return nodes;
        };

        const nodes = generateNetworkNodes(60);

        // Major Hubs (representing key tech centers)
        const hubs = [
            { location: [37.7595, -122.4367], size: 0.06 }, // SF
            { location: [40.7128, -74.006], size: 0.05 }, // NY
            { location: [51.5074, -0.1278], size: 0.05 }, // London
            { location: [12.9716, 77.5946], size: 0.06 }, // Bangalore
            { location: [35.6762, 139.6503], size: 0.05 }, // Tokyo
            { location: [1.3521, 103.8198], size: 0.05 }, // Singapore
            { location: [25.2048, 55.2708], size: 0.05 }, // Dubai
            { location: [-33.8688, 151.2093], size: 0.05 }, // Sydney
            { location: [52.5200, 13.4050], size: 0.04 }, // Berlin
        ];

        // Create dense connections between random nodes to form a "mesh"
        // And specific "trunk" lines between hubs
        const createConnection = (start: any, end: any, steps = 30) => {
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
                markers.push({ location: [lat, lon], size: 0.01 });
            }
            return markers;
        };

        const connections = [
            ...createConnection(hubs[0].location, hubs[4].location, 50), // SF -> Tokyo
            ...createConnection(hubs[1].location, hubs[2].location, 30), // NY -> London
            ...createConnection(hubs[2].location, hubs[3].location, 40), // London -> Bangalore
            ...createConnection(hubs[3].location, hubs[5].location, 20), // Bangalore -> Singapore
            ...createConnection(hubs[5].location, hubs[4].location, 30), // Singapore -> Tokyo
            ...createConnection(hubs[3].location, hubs[6].location, 20), // Bangalore -> Dubai
            ...createConnection(hubs[0].location, hubs[7].location, 60), // SF -> Sydney
        ];

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: Math.min(window.devicePixelRatio, 2),
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0.3,
            dark: 0,
            diffuse: 0.2,
            mapSamples: 0, // NO MAP - Invisible landmass!
            mapBrightness: 0,
            baseColor: [1, 1, 1], // White base (invisible against white bg)
            markerColor: [0.2, 0.4, 1], // Tech Blue
            glowColor: [0.9, 0.95, 1], // Subtle glow
            opacity: 0.8,
            markers: [
                ...nodes, // Random tech nodes
                ...hubs,  // Major hubs
                ...connections // The data mesh
            ],
            onRender: (state) => {
                // Always rotate slowly (technology never sleeps)
                // Spin faster on hover
                state.phi = phi;
                phi += isHovering.current ? 0.01 : 0.002;
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
            className={cn("relative w-full aspect-square flex items-center justify-center grayscale-[20%] hover:grayscale-0 transition-all duration-500", className)}
            onMouseEnter={() => (isHovering.current = true)}
            onMouseLeave={() => (isHovering.current = false)}
        >
            <canvas
                ref={canvasRef}
                style={{ width: '100%', height: '100%', maxWidth: "600px", aspectRatio: 1 }}
                className="w-full h-full opacity-90 transition-opacity duration-500"
            />

            {/* Overlay Gradient to blend edges if needed */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-white/50 pointer-events-none" />
        </div>
    );
}
