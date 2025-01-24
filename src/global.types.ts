export type DynamicCSSVariables<T extends string> = {
  [key in `--hf-ui-${T}`]?: string;
};
