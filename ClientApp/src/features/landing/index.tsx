import * as React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { LandingModule } from './store/module';
import ConnectedLanding from './landing';

export const DynamicLanding = () => (
  <DynamicModuleLoader modules={[LandingModule]}>
    <ConnectedLanding />{' '}
  </DynamicModuleLoader>
);

export default DynamicLanding;
