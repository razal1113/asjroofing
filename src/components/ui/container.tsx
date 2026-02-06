import { cn } from "@/lib/utils/cn"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
}

export function Container({
    as: Component = "div", // Default to div, but allow semantic section/header etc
    className,
    children,
    ...props
}: ContainerProps) {
    return (
        <Component
            className={cn(
                "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    )
}
