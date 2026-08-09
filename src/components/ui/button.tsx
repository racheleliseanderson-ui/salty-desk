import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-sm)] font-medium transition-[opacity,transform,background-color,border-color,color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bordeaux/50 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.96] [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-bordeaux text-ivory hover:bg-bordeaux-hover border border-transparent",
        brass: "bg-champagne text-ink-deep hover:bg-champagne-soft border border-transparent",
        secondary:
          "border border-border-strong bg-transparent text-fg hover:bg-surface-2",
        ghost: "text-fg-muted hover:text-fg hover:bg-surface-2",
        outline:
          "border border-border-strong bg-transparent text-fg hover:bg-surface-2",
      },
      size: {
        default: "h-10 px-4 text-sm",
        sm: "h-9 px-3 text-xs",
        lg: "h-12 px-7 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export { buttonVariants };
