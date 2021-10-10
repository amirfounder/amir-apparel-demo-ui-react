import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { PaginationButton } from ".";
import { scrollToTop } from "../../../../../utils/utils";
import { updateSearchQueryKeyValuePair } from "../../../../../utils/utils";

const mockHistoryPush = jest.fn()

jest.mock('../../../../../utils/utils', () => ({
  ...jest.requireActual('../../../../../utils/utils'),
  scrollToTop: jest.fn(),
  updateSearchQueryKeyValuePair: jest.fn()
}))

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush
  })
}))

test('render', () => {
  render(<BrowserRouter><PaginationButton /></BrowserRouter>)
  const paginationButton = screen.getByTestId('pagination-button')
  expect(paginationButton).toBeInTheDocument();
})

test('click function', () => {
  render(<BrowserRouter><PaginationButton /></BrowserRouter>)
  const paginationButton = screen.getByTestId('pagination-button');
  fireEvent.click(paginationButton)
  expect(scrollToTop).toHaveBeenCalled();
  expect(updateSearchQueryKeyValuePair).toHaveBeenCalled();
  expect(mockHistoryPush).toHaveBeenCalled()
})