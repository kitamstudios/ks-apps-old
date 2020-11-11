import { RouterState } from 'connected-react-router';

export interface AppSettings {
  readonly DeploymentEnvironmentName: string;
  readonly DeploymentReleaseNumber: string;
  readonly DeploymentCreatedTimestamp: string;
}

export interface AppSettingsState {
  readonly loading: boolean;
  readonly data: AppSettings;
  readonly errors?: string;
}

export interface ApplicationState {
  appSettings: AppSettingsState;
  router: RouterState;
}
