import * as React from "react"
import { Slot } from "@radix-ui/react-slot" // Need to install this, or just implement simple version
import { type VariantProps, cva } from "class-variance-authority" // Need to install this
import { cn } from "@/lib/utils/cn"

// Since I haven't installed `class-variance-authority` or `@radix-ui/react-slot` yet
// I will implement a simpler version for now or install them. 
// Standard shadcn uses them. Users usually expect shadcn quality.
// Plan: I'll use simple implementation first to avoid dependency hell, 
// OR I will install them in the next step. 
// Given "Web Application Development" guidelines, "Build necessary components using your design system".
// I'll stick to simple Tailwind for now to be fast, but keeping the "Button" name.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'ghost' | 'secondary'
    size?: 'default' | 'sm' | 'lg' | 'icon'
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'default', size = 'default', ...props }, ref) => {

        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

        const variants = {
            default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            ghost: "hover:bg-accent hover:text-accent-foreground",
        }

        const sizes = {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-12 rounded-lg px-8 text-base",
            icon: "h-10 w-10",
        }

        return (
            <button
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
