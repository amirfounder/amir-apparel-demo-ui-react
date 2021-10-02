import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { buildSearchQuery, buildSearchQueryObject } from '../../../../utils/utils';
import styles from './SortByDropdown.module.scss';

export const SortByDropdownOption = (props) => {
  const {
    setValue,
    setDisplay,
    value,
    children,
  } = props;

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = () => {
    setValue(value);
    setDisplay(children)
    const searchQueryObject = buildSearchQueryObject(location.search)
    searchQueryObject.sort = value;
    const searchQuery = buildSearchQuery(searchQueryObject);
    history.push(searchQuery);
  }

  return (
    <div
      onClick={handleOnChange}
      className={styles.option}
    >
      {children}
    </div>
  )
}