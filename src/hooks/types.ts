import { PaginatedSchedulerData } from "@/types/global";

export type UsePaginationData = {
  /**
   * Represents paginated data on current page
   */
  page: PaginatedSchedulerData;
  /**
   * Amount of rows per item
   */
  rowsPerItem: number[];
  /**
   * Total amount of rows displayed on current page
   */
  totalRowsPerPage: number;
};
