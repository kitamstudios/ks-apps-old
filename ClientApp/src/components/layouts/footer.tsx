import React from 'react';
import * as MatCore from '@material-ui/core';
import * as Luxon from 'luxon';

const style = {
  position: 'fixed',
  bottom: 0,
  paddingTop: '10px',
  paddingBottom: '10px',
  width: '100%',
  textAlign: 'center',
  backgroundColor: 'white',
} as React.CSSProperties;

interface Props {
  deploymentTimestamp: string;
  releaseNumber: string;
}

const getDeployedTimeStamp = (date: string): string => Luxon.DateTime.fromSQL(date).toFormat('dd:MM:yyyy HH:mm:ss');

export const Footer = ({ releaseNumber, deploymentTimestamp }: Props) => (
  <div style={style}>
    <MatCore.Typography variant="caption" display="block" gutterBottom>
      {'\u00A9 '}
      <a href="https://www.sirimangalo.org/" target="_blank" rel="noopener noreferrer">
        Sirimangalo.Org
      </a>
      {' | '}
      {releaseNumber}
      {' | '}
      {getDeployedTimeStamp(deploymentTimestamp)}
    </MatCore.Typography>
  </div>
);

export default Footer;
