import { LoaderCircle } from "lucide-react";
import React, { MouseEventHandler, useCallback } from "react";
import { cn } from "../lib/utils";
import { ButtonProps } from "./button.types";

const Button = ({
  variant = "solid",
  color = "primary",
  size = "nm",
  rounded = "nm",
  icon = false,
  as = "button",
  decorator,
  children,
  className,
  loading,
  hover,
  ...props
}: ButtonProps) => {
  const Slot: any = as;

  const DecoratorIcon = decorator && decorator.icon;
  const decoratorPos = decorator && "pos" in decorator ? decorator.pos : "left";

  const createRipple = useCallback(
    (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      const button = event.currentTarget;
      const circle = document.createElement("span");
      const rect = button.getBoundingClientRect();

      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - rect.left - radius}px`;
      circle.style.top = `${event.clientY - rect.top - radius}px`;
      circle.classList.add("ripple-effect");

      // Establecer color del ripple según la variante
      const rippleColor =
        variant === "solid"
          ? "rgba(255, 255, 255, 0.3)"
          : `rgba(${getComputedStyle(button).getPropertyValue("--color")}, 0.1)`;

      circle.style.setProperty("--ripple-color", rippleColor);

      const existingRipples = button.getElementsByClassName("ripple-effect");
      if (existingRipples.length > 0) {
        existingRipples[0].remove();
      }

      button.appendChild(circle);

      setTimeout(() => {
        circle.remove();
      }, 600);
    },
    [variant]
  );

  const handleClick: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = (event) => {
    createRipple(event);
    if (props.onClick) props.onClick(event as any);
  };

  return (
    <Slot
      className={cn(
        `btn size-${size} rounded-${rounded} ${variant}`,
        loading && "loading",
        {
          icon: icon,
          hover: hover,
        },
        className
      )}
      onClick={handleClick}
      data-color={color}
      {...props}
    >
      {loading ? (
        <LoaderCircle className="decorator absolute inset-0 flex items-center justify-center" />
      ) : (
        <>
          {decoratorPos === "left" && DecoratorIcon && <DecoratorIcon className="decorator" />}
          {!icon && children}
          {decoratorPos === "right" && DecoratorIcon && <DecoratorIcon className="decorator" />}
        </>
      )}
    </Slot>
  );
};

Button.displayName = "Button";

export { Button };
