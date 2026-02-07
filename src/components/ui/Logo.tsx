import { cn } from "@/lib/utils/cn"

interface LogoProps {
    className?: string
    isScrolled?: boolean
    isFloating?: boolean
}

export function Logo({ className, isScrolled, isFloating }: LogoProps) {
    // Brand Colors
    const redColor = "#D31027" // Deep red from logo
    const textColor = isFloating ? "white" : "black"
    const subtextColor = isFloating ? "#CBD5E1" : "#475569"

    return (
        <div className={cn("relative flex items-center justify-center h-full", className)}>
            <svg
                viewBox="20 10 260 85"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-auto"
                preserveAspectRatio="xMidYMid meet"
            >
                {/* Red Decorative Triangle / Roof Shape */}
                <path
                    d="M30 65 L150 15 L270 65"
                    fill={redColor}
                    fillOpacity="0.9"
                />

                {/* ASJ Main Text - Heavy Bold */}
                <text
                    x="150"
                    y="62"
                    textAnchor="middle"
                    fill={textColor}
                    style={{
                        font: '900 72px Inter, sans-serif',
                        letterSpacing: '-0.04em'
                    }}
                >
                    ASJ
                </text>

                {/* ROOFING Subtext - Spaced out */}
                <text
                    x="150"
                    y="88"
                    textAnchor="middle"
                    fill={subtextColor}
                    style={{
                        font: 'bold 18px Inter, sans-serif',
                        letterSpacing: '0.4em',
                        textTransform: 'uppercase'
                    }}
                >
                    ROOFING
                </text>
            </svg>
        </div>
    )
}
