"use client";

import * as React from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Magnetic } from "./magnetic";

export interface ButtonOwnProps {
  asChild?: boolean;
  href?: string;
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

type ButtonProps = ButtonOwnProps & (
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
);

const variants = {
  default: "bg-foreground text-pure-white shadow hover:bg-foreground/90",
  outline: "border border-border bg-background hover:bg-muted-beige hover:text-foreground text-foreground",
  ghost: "hover:bg-muted-beige hover:text-foreground text-foreground",
  link: "text-foreground underline-offset-4 hover:underline",
};

const sizes = {
  default: "h-11 px-6 py-2",
  sm: "h-9 px-4 text-xs",
  lg: "h-14 px-10 text-base",
  icon: "h-11 w-11",
};

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, href, ...props }, ref) => {
    const Comp = asChild ? Slot : href ? Link : "button";
    const buttonClasses = cn(
      "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border disabled:pointer-events-none disabled:opacity-50",
      variants[variant],
      sizes[size],
      className
    );

    if (asChild) {
      return (
        <Magnetic>
          <Comp
            className={buttonClasses}
            ref={ref as React.ForwardedRef<any>}
            {...(props as any)}
          />
        </Magnetic>
      );
    }

    if (href) {
      return (
        <Magnetic>
          <Link href={href} className={buttonClasses} ref={ref as React.ForwardedRef<HTMLAnchorElement>} {...(props as any)} />
        </Magnetic>
      );
    }

    return (
      <Magnetic>
        <motion.button
          className={buttonClasses}
          ref={ref as React.ForwardedRef<HTMLButtonElement>}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          {...(props as any)}
        />
      </Magnetic>
    );
  }
);
Button.displayName = "Button";

export { Button };
