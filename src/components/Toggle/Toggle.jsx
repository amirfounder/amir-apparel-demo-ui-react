import React from 'react';
import { ToggleHeader } from './ToggleHeader';
import { ToggleContent } from './ToggleContent';

export const Toggle = (props) => {
  const {
    children,
  } = props;

  return(
    <div>
      {children}
    </div>
  )
}

Toggle.Content = ToggleContent;
Toggle.Header = ToggleHeader;
