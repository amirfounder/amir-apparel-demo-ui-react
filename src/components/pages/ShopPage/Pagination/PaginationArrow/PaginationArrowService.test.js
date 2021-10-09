import { buildPaginationArrowTargetSearchQuery } from "./PaginationArrowService";

describe('build pagination arrow target search query', () => {

  test('build right arrow target search query', () => {
    const
      currentSearchQuery = '',
      currentPage = 1,
      direction = 'right',
      expected = '?page=1',
      actual = buildPaginationArrowTargetSearchQuery(
        currentSearchQuery,
        currentPage,
        direction
      );
  
      expect(actual).toEqual(expected);
  })

  test('build right arrow target search query', () => {
    const
      currentSearchQuery = '',
      currentPage = 2,
      direction = 'left',
      expected = '?',
      actual = buildPaginationArrowTargetSearchQuery(
        currentSearchQuery,
        currentPage,
        direction
      );
  
      expect(actual).toEqual(expected);
  })
})