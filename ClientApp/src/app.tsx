import React from 'react';
import { applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux-dynamic-modules';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getSagaExtension } from 'redux-dynamic-modules-saga';
import { getThunkExtension } from 'redux-dynamic-modules-thunk';
import { createHashHistory } from 'history';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import TelemetryProvider from './telemetryProvider';
import Routes from './routes';
import { createApplicationModule } from './features/application/store/module';

const history = createHashHistory();

const store = createStore(
  {
    initialState: window.initialReduxState,
    enhancers: [applyMiddleware(routerMiddleware(history))],
    extensions: [getThunkExtension(), getSagaExtension()],
    advancedComposeEnhancers: composeWithDevTools({ maxAge: 500 }),
  },
  createApplicationModule(history),
);

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
  spacing: 10,
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['"Lato"', 'sans-serif'].join(','),
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <TelemetryProvider instrumentationKey={window.appInsightsInstrumentationKey}>
          <Routes />
        </TelemetryProvider>
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>
);

export default App;
