import { Day } from "@/types/global";
import { drawDaysOnBottom } from "./drawRows/drawDaysOnBottom";
import { drawMonthsOnTop } from "./drawRows/drawMonthsOnTop";
import { drawWeeksInMiddle } from "./drawRows/drawWeeksInMiddle";

export const drawHeader = (
  ctx: CanvasRenderingContext2D,
  zoom: number,
  cols: number,
  startDate: Day,
  weekLabel: string
) => {
  if (zoom === 1) {
    drawMonthsOnTop(ctx, startDate);
    drawWeeksInMiddle(ctx, startDate, weekLabel);
    drawDaysOnBottom(ctx, cols, startDate);
  }
};
