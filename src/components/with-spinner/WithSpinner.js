import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './WithSpinner.style';

const WithSpinner = (CTBR) => ({ isLoading, ...otherProps }) => {
  return isLoading ?
    (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    )
    :
    (
      <CTBR {...otherProps} />
    );
}

export default WithSpinner;
