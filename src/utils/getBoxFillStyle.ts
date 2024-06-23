import { daysFillStyle } from "@/constants";
import { theme } from "@/styles";
import { TextAndBoxStyleConfig } from "@/types/global";

export const getBoxFillStyle = (config: TextAndBoxStyleConfig) => {
  const { isCurrent, variant } = config;
  if (variant === "yearView") return isCurrent ? theme.colors.blue300 : daysFillStyle;
  if (isCurrent) return theme.colors.blue300;

  return daysFillStyle;
};
