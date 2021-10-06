import { setQuantityService } from "./QuantityPickerService";


const setQuantityMock = jest.fn();

test('value => 0', () => {
  const value = '0';
  setQuantityService(value, setQuantityMock);
  expect(setQuantityMock).toHaveBeenCalled();
})
test('value => 0.5', () => {
  const value = '.5';
  setQuantityService(value, setQuantityMock);
  expect(setQuantityMock).not.toHaveBeenCalled();
})
test('value => 99', () => {
  const value = '99';
  setQuantityService(value, setQuantityMock);
  expect(setQuantityMock).toHaveBeenCalled();
})
test('value => -5', () => {
  const value = '-5';
  setQuantityService(value, setQuantityMock);
  expect(setQuantityMock).not.toHaveBeenCalled();
})
test('value => ""', () => {
  const value = '';
  setQuantityService(value, setQuantityMock);
  expect(setQuantityMock).toHaveBeenCalled();
})