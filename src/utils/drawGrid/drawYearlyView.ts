import { boxHeight, singleDayWidth, weekWidth } from "@/constants";
import { Day } from "@/types/global";
import { drawDashedLine } from "../drawDashedLine";
import { getDaysInMonths } from "../dates";
import { drawCell } from "./drawCell";

export const drawYearlyView = (
  ctx: CanvasRenderingContext2D,
  rows: number,
  cols: number,
  startDate: Day
) => {
  let xPos = 0;
  let startPos = -(startDate.dayOfMonth - 1) * singleDayWidth;

  for (let i = 0; i <= cols; i++) {
    for (let y = 0; y < rows; y++) {
      drawCell(ctx, xPos, y * boxHeight, weekWidth, true);
    }

    xPos += weekWidth;
  }

  for (let i = 0; i < cols; i++) {
    const width = getDaysInMonths(startDate, i) * singleDayWidth;
    drawDashedLine(ctx, startPos, rows * boxHeight);
    startPos += width;
  }
};
