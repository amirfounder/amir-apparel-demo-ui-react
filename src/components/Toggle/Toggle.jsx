import React from 'react';
import { ToggleHeader } from './ToggleHeader';
import { ToggleContent } from './ToggleContent';

export const Toggle = (props) => {
  const {
    children,
    dataTestId
  } = props;

  return(
    <div data-testId={dataTestId || 'toggle'}>
      {children}
    </div>
  )
}

Toggle.Content = ToggleContent;
Toggle.Header = ToggleHeader;
