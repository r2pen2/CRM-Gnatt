import { FC, useMemo, useRef } from "react";
import { useCalendar } from "@/context/CalendarProvider";
import { getDatesRange } from "@/utils/getDatesRange";
import { usePagination } from "@/hooks/usePagination";
import EmptyBox from "../EmptyBox";
import { Grid, Header, LeftColumn } from "..";
import { CalendarProps } from "./types";
import { StyledOuterWrapper, StyledInnerWrapper } from "./styles";

export const Calendar: FC<CalendarProps> = ({ data, onTileClick, onItemClick }) => {
  const { zoom, date, zoomIn } = useCalendar();
  const gridRef = useRef<HTMLDivElement>(null);
  const datesRange = useMemo(() => getDatesRange(date, zoom), [date, zoom]);
  const { page, totalRowsPerPage, rowsPerItem } = usePagination(data, datesRange);

  zoomIn(); // Enforce zoom 1

  return (
    <StyledOuterWrapper>
      <LeftColumn data={page} rows={rowsPerItem} onItemClick={onItemClick} />
      <StyledInnerWrapper>
        <Header zoom={zoom} />
        {data.length ? (
          <Grid
            data={page}
            zoom={zoom}
            rows={totalRowsPerPage}
            ref={gridRef}
            onTileClick={onTileClick}
          />
        ) : (
          <EmptyBox />
        )}
      </StyledInnerWrapper>
    </StyledOuterWrapper>
  );
};

export default Calendar;
