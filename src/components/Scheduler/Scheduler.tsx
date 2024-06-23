import { ThemeProvider } from "styled-components";
import { useEffect, useMemo, useRef, useState } from "react";
import dayjs from "dayjs";
import { Calendar } from "@/components";
import CalendarProvider from "@/context/CalendarProvider";
import LocaleProvider from "@/context/LocaleProvider";
import { GlobalStyle, theme } from "@/styles";
import { Config } from "@/types/global";
import { outsideWrapperId } from "@/constants";
import { SchedulerProps } from "./types";
import { StyledInnerWrapper, StyledOutsideWrapper } from "./styles";

const Scheduler = ({
  data,
  config,
  startDate,
  onRangeChange,
  onTileClick,
  onFilterData,
  onClearFilterData,
  onItemClick,
  isLoading
}: SchedulerProps) => {
  const appConfig: Config = useMemo(
    () => ({
      zoom: 0,
      filterButtonState: 1,
      includeTakenHoursOnWeekendsInDayView: false,
      ...config
    }),
    [config]
  );

  const outsideWrapperRef = useRef<HTMLDivElement>(null);
  const defaultStartDate = useMemo(() => dayjs(startDate), [startDate]);

  if (!outsideWrapperRef.current) null;
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <LocaleProvider lang={appConfig.lang}>
          <CalendarProvider
            data={data}
            isLoading={!!isLoading}
            config={appConfig}
            onRangeChange={onRangeChange}
            defaultStartDate={defaultStartDate}
            onFilterData={onFilterData}
            onClearFilterData={onClearFilterData}>
            <StyledOutsideWrapper
              showScroll={!!data.length}
              id={outsideWrapperId}
              ref={outsideWrapperRef}>
              <StyledInnerWrapper>
                <Calendar data={data} onTileClick={onTileClick} onItemClick={onItemClick} />
              </StyledInnerWrapper>
            </StyledOutsideWrapper>
          </CalendarProvider>
        </LocaleProvider>
      </ThemeProvider>
    </>
  );
};

export default Scheduler;
