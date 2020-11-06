/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from './scrollToTop';
import LoadingSpinner from './components/loadingSpinner';

const routes = new Map<string, React.ComponentType>([
  ['/', React.lazy(() => import('./features/landing'))],
  ['/navigation', React.lazy(() => import('./features/navigation'))],
  ['/search', React.lazy(() => import('./features/search'))],
  ['/tools', React.lazy(() => import('./features/tools'))],
  ['/help', React.lazy(() => import('./features/help'))],
]);

const WaitingComponent = (Component: any) => (props: any) => (
  <React.Suspense fallback={<LoadingSpinner />}>
    <Component {...props} />
  </React.Suspense>
);

const routeNotFound = () => <div>Not found...</div>;

const Routes: React.FC = () => (
  <ScrollToTop>
    <Switch>
      {Array.from(routes.entries()).map(kvp => (
        <Route key={kvp[0]} exact path={kvp[0]} component={WaitingComponent(kvp[1])} />
      ))}
      <Route component={routeNotFound} />
    </Switch>
  </ScrollToTop>
);

export default Routes;
