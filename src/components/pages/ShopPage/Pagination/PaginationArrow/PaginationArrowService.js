import { updateSearchQueryKeyValuePair } from "../../../../../utils/utils";

export const buildPaginationArrowTargetSearchQuery = (currentSearchQuery, currentPage, direction) => {
  const key = 'page';
  const value = direction === 'right' ? currentPage : currentPage - 2
  return updateSearchQueryKeyValuePair(currentSearchQuery, key, value)
}