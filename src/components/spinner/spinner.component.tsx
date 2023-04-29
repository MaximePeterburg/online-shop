import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

type Props = {};

const Spinner = (props: Props) => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Spinner;
