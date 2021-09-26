import React, { createContext, useContext } from 'react';
import { ToggleHeader } from './ToggleHeader';
import { ToggleContent } from './ToggleContent';

export const Toggle = (props) => {
  const {
    children,
    theme
  } = props;

  return(
    <div>
      {children}
    </div>
  )
}

Toggle.Content = ToggleContent;
Toggle.Header = ToggleHeader;
