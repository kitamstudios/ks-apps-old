import { action } from 'typesafe-actions';
import { AppSettings } from './contracts';

export enum AppSettingsActionTypes {
  FETCH_REQUEST = '@@appSettings/FETCH_REQUEST',
  FETCH_SUCCESS = '@@appSettings/FETCH_SUCCESS',
  FETCH_ERROR = '@@appSettings/FETCH_ERROR',
}

export const fetchRequest = () => action(AppSettingsActionTypes.FETCH_REQUEST);
export const fetchSuccess = (data: AppSettings) => action(AppSettingsActionTypes.FETCH_SUCCESS, data);
export const fetchError = (message: string) => action(AppSettingsActionTypes.FETCH_ERROR, message);
