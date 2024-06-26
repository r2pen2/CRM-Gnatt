import { FC, useCallback, useEffect, useRef } from "react";
import { headerHeight, screenWidthMultiplier, canvasHeaderWrapperId } from "@/constants";
import { useCalendar } from "@/context/CalendarProvider";
import { useLanguage } from "@/context/LocaleProvider";
import { drawHeader } from "@/utils/drawHeader/drawHeader";
import { resizeCanvas } from "@/utils/resizeCanvas";
import { HeaderProps } from "./types";
import { StyledCanvas, StyledOuterWrapper, StyledWrapper } from "./styles";

const Header: FC<HeaderProps> = ({ zoom }) => {
  const { week } = useLanguage();
  const { date, cols, startDate } = useCalendar();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleResize = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      const width = window.innerWidth * screenWidthMultiplier;
      const height = headerHeight + 1;
      resizeCanvas(ctx, width, height);

      drawHeader(ctx, zoom, cols, startDate, week);
    },
    [cols, startDate, week, zoom]
  );

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;
    const onResize = () => handleResize(ctx);
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [handleResize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.style.letterSpacing = "1px";
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    handleResize(ctx);
  }, [date, zoom, handleResize]);

  return (
    <StyledOuterWrapper>
      <StyledWrapper id={canvasHeaderWrapperId}>
        <StyledCanvas ref={canvasRef} />
      </StyledWrapper>
    </StyledOuterWrapper>
  );
};

export default Header;
