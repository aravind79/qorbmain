import { cn } from "@/lib/utils";
import { Bot, Cloud, Code, Database, Globe, Layers, Cpu, Smartphone, Zap, Sparkles } from "lucide-react";

interface ServiceOrbitProps {
    className?: string;
}

export default function ServiceOrbit({ className }: ServiceOrbitProps) {
    return (
        <div className={cn("relative w-full aspect-square flex items-center justify-center", className)}>
            {/* Center Core (Sun/AI) */}
            <div className="absolute z-10 flex items-center justify-center w-24 h-24 lg:w-32 lg:h-32 bg-white rounded-full shadow-2xl border-4 border-blue-50">
                <div className="text-blue-600 relative">
                    <Bot className="w-12 h-12 lg:w-16 lg:h-16" />
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl animate-pulse" />
                </div>
            </div>

            {/* Orbit Rings (Planetary Orbits) */}

            {/* Inner Ring - Fast */}
            <OrbitRing
                radius="130px"
                duration={25}
                icons={[
                    { Icon: Zap, color: "text-amber-500", bg: "bg-amber-50" },
                    { Icon: Sparkles, color: "text-indigo-500", bg: "bg-indigo-50" }
                ]}
            />

            {/* Middle Ring - Medium */}
            <OrbitRing
                radius="220px"
                duration={40}
                reverse
                icons={[
                    { Icon: Cloud, color: "text-sky-500", bg: "bg-sky-50" },
                    { Icon: Code, color: "text-violet-500", bg: "bg-violet-50" },
                    { Icon: Smartphone, color: "text-emerald-500", bg: "bg-emerald-50" },
                    { Icon: Database, color: "text-cyan-500", bg: "bg-cyan-50" }
                ]}
            />

            {/* Outer Ring - Slow */}
            <OrbitRing
                radius="310px"
                duration={60}
                icons={[
                    { Icon: Globe, color: "text-teal-500", bg: "bg-teal-50" },
                    { Icon: Cpu, color: "text-orange-500", bg: "bg-orange-50" },
                    { Icon: Layers, color: "text-pink-500", bg: "bg-pink-50" }
                ]}
            />

            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/30 via-transparent to-transparent rounded-full opacity-50 blur-3xl -z-10" />

            {/* Global Styles for Keyframes (to ensure they exist without global css file edit) */}
            <style>{`
                @keyframes orbit-spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes orbit-counter-spin {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
            `}</style>
        </div>
    );
}

const OrbitRing = ({
    radius,
    duration,
    icons,
    reverse = false,
    delay = 0
}: {
    radius: string,
    duration: number,
    icons: { Icon: any, color: string, bg: string }[],
    reverse?: boolean
    delay?: number
}) => {
    return (
        <div
            className="absolute rounded-full border border-dashed border-blue-300 transition-transform duration-500 hover:scale-105 will-change-transform"
            style={{
                width: `calc(${radius} * 2)`,
                height: `calc(${radius} * 2)`,
                animation: `${reverse ? 'orbit-counter-spin' : 'orbit-spin'} ${duration}s linear infinite`,
                animationDelay: `${delay}s`
            }}
        >
            {icons.map((item, index) => {
                const angle = (index / icons.length) * 360;

                return (
                    <div
                        key={index}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{
                            transform: `rotate(${angle}deg) translate(${radius}) rotate(-${angle}deg)`
                        }}
                    >
                        <div
                            className={cn(
                                "flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-2xl shadow-sm border border-white/50 backdrop-blur-sm bg-white/80",
                                item.bg
                            )}
                            style={{
                                animation: `${reverse ? 'orbit-spin' : 'orbit-counter-spin'} ${duration}s linear infinite`, // Counter-rotate icons to keep them upright
                            }}
                        >
                            <item.Icon className={cn("w-6 h-6 lg:w-7 lg:h-7", item.color)} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
