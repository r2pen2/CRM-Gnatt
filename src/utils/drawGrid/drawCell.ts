import { boxHeight } from "@/constants";
import { theme } from "@/styles";

export const drawCell = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  isCurrentDay: boolean
) => {
  ctx.strokeStyle = theme.colors.grey400;
  if (isCurrentDay) {
    ctx.fillStyle = theme.colors.blue200;
  } else {
    ctx.fillStyle = "transparent";
  }
  ctx.beginPath();
  ctx.setLineDash([]);
  ctx.fillRect(x, y, width, boxHeight);
  ctx.strokeRect(x + 0.5, y + 0.5, width, boxHeight);
};
