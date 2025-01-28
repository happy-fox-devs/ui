import { LucideIcon } from "lucide-react";
import { HTMLAttributes, RefObject } from "react";
import { DynamicCSSVariables } from "../global.types";

type CustomCSSVariables = React.CSSProperties &
  DynamicCSSVariables<"font-size" | "padding" | "gap" | "bg-color" | "decorator-size">;

type Variant = "solid" | "plain" | "soft" | "outlined";
type Color = "primary" | "success" | "danger" | "warning" | "neutral" | "secondary" | "black";
type Size = "3xs" | "2xs" | "xs" | "sm" | "nm" | "lg" | "xl";
type Rounded = "none" | "xs" | "nm" | "lg" | "xl" | "full";
type Target = "_self" | "_blank" | "_parent" | "_top" | "framename";
type Type = "button" | "submit" | "reset";

export type ButtonProps = {
  as?: "button" | "a";
  color?: Color;
  disabled?: boolean;
  decorator?: { icon: LucideIcon; pos?: "left" | "right" };
  hover?: boolean;
  href?: string;
  icon?: boolean;
  loading?: boolean;
  ref?: RefObject<HTMLButtonElement | null>;
  rounded?: Rounded;
  size?: Size;
  style?: CustomCSSVariables;
  target?: Target;
  type?: Type;
  variant?: Variant;
} & HTMLAttributes<HTMLButtonElement> &
  HTMLAttributes<HTMLAnchorElement>;
