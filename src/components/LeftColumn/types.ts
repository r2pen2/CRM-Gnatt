import { PaginatedSchedulerData, SchedulerItemClickData } from "@/types/global";

export type LeftColumnProps = {
  data: PaginatedSchedulerData;
  rows: number[];
  onItemClick?: (data: SchedulerItemClickData) => void;
};

export type StyledInputWrapperProps = {
  isFocused: boolean;
};
