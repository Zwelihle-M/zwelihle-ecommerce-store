import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ShoppingButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          `fixed bottom-10 right-10 z-10 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-primaryBrown to-primaryBrownDarker`,
          className
        )}

        // remove later
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
);

ShoppingButton.displayName = "Button";

export default ShoppingButton;