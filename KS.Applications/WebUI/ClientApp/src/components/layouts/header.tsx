import React from 'react';
import * as Mat from '@material-ui/core';
import * as MatIco from '@material-ui/icons';

const styles = (theme: Mat.Theme) =>
  Mat.createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(0.5),
    },
    title: {
      flexGrow: 1,
    },
  });

interface Props extends Mat.WithStyles<typeof styles> {
  environmentName: string;
}

const bannerStyle = {
  width: '200px',
  background: '#e43',
  position: 'fixed',
  top: '15px',
  left: '-70px',
  textAlign: 'center',
  lineHeight: '25px',
  letterSpacing: '1px',
  color: '#f0f0f0',
  transform: 'rotate(-45deg)',
  WebkitTransform: 'rotate(-45deg)',
  zIndex: 9999,
} as React.CSSProperties;

export const Header = ({ environmentName, classes }: Props): JSX.Element => (
  <div className={classes.root}>
    {environmentName !== 'production' && <div style={bannerStyle}>{environmentName}</div>}
    <Mat.AppBar position="static">
      <Mat.Toolbar>
        <Mat.IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MatIco.Menu />
        </Mat.IconButton>
        <Mat.Typography variant="h6" className={classes.title}>
          Digital Pali Reader
        </Mat.Typography>
      </Mat.Toolbar>
    </Mat.AppBar>
  </div>
);

export default Mat.withStyles(styles)(Header);
