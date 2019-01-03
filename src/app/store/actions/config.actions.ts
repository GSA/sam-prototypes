import { Action } from '@ngrx/store';

export enum ConfigActionTypes {
  DomainChanged = '[Config] Domain Changed',
  SectionChanged = '[Config] Section Changed'
}

export class DomainChanged implements Action {
  readonly type = ConfigActionTypes.DomainChanged;

  constructor(public domainId: string) {}
}

export class SectionChanged implements Action {
  readonly type = ConfigActionTypes.SectionChanged;

  constructor(public sectionId: string) {}
}

export type ConfigActions = DomainChanged | SectionChanged;
