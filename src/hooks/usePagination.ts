import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SchedulerData } from "@/types/global";
import { DatesRange } from "@/utils/getDatesRange";
import { splitToPages } from "@/utils/splitToPages";
import { projectsOnGrid } from "@/utils/getProjectsOnGrid";
import { getTotalRowsPerPage } from "@/utils/getTotalRowsPerPage";
import { useCalendar } from "@/context/CalendarProvider";
import { outsideWrapperId } from "@/constants";
import { UsePaginationData } from "./types";

export const usePagination = (data: SchedulerData, datesRange: DatesRange): UsePaginationData => {
  const { recordsThreshold } = useCalendar();
  const startIndex = 0;
  const pageNum = 0;
  const outsideWrapper = useRef<HTMLElement | null>(null);

  useEffect(() => {
    outsideWrapper.current = document.getElementById(outsideWrapperId);
  }, []);

  const { projectsPerPerson, rowsPerPerson } = useMemo(
    () => projectsOnGrid(data, datesRange),
    [data, datesRange]
  );

  const pages = useMemo(
    () => splitToPages(data, projectsPerPerson, rowsPerPerson, recordsThreshold),
    [data, projectsPerPerson, recordsThreshold, rowsPerPerson]
  );

  const end = startIndex + pages[pageNum].length;

  const rowsPerItem = useMemo(
    () => rowsPerPerson.slice(startIndex, end),
    [end, rowsPerPerson, startIndex]
  );

  return {
    page: pages[pageNum],
    rowsPerItem,
    totalRowsPerPage: getTotalRowsPerPage(pages[pageNum])
  };
};
