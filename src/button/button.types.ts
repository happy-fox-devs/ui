import { LucideIcon } from "lucide-react";
import {
  HTMLAttributes
} from "react";
import { DynamicCSSVariables } from "../global.types";

type CustomCSSVariables = React.CSSProperties &
  DynamicCSSVariables<"font-size" | "padding" | "color">;

type Variant = "solid" | "plain" | "soft" | "outlined";
type Color =
  | "primary"
  | "success"
  | "danger"
  | "warning"
  | "neutral"
  | "secondary";
type Size = "xs" | "sm" | "nm" | "lg" | "xl";
type Rounded = "none" | "xs" | "nm" | "lg" | "xl" | "full";

export type ButtonProps = {
  variant?: Variant;
  color?: Color;
  size?: Size;
  rounded?: Rounded;
  icon?: boolean;
  decorator?: LucideIcon | { icon: LucideIcon; pos: "left" | "right" };
  loading?: boolean;
  as?: "button" | "a";
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top" | "framename";
  style?: CustomCSSVariables;
} & HTMLAttributes<HTMLElement>;
