import React from 'react';
import './loadingSpinner.css';
import loaderSrc from './loadingSpinner.png';

export const LoadingSpinner = (): JSX.Element => (
  <div>
    <img className="loadingSpinner" alt="Loading spinner" src={loaderSrc} />
  </div>
);

export default LoadingSpinner;
