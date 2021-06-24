import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { FormlyFieldConfig } from "@ngx-formly/core";
import { INavigationLink, Selectable, NavigationMode } from '@gsa-sam/components';

export enum NavigationLinkStatus {
  Done,
  NotStarted,
  Error
}

export class DataEntryNavigationLink implements INavigationLink {

  constructor(public id: string, 
         public route: string, 
         public text: string,
         public mode: NavigationMode, 
         public children: DataEntryNavigationLink[],
         public fields?: FormlyFieldConfig[], 
         public selected?: boolean, 
         public status?: NavigationLinkStatus) {

  }
}

export abstract class DataEntryUiService {
 
  public selectedLinkChange$ = new BehaviorSubject<DataEntryNavigationLink>(null);

  _selectedLink: DataEntryNavigationLink;

  abstract get links() : DataEntryNavigationLink[];

  public get selectedLink() : DataEntryNavigationLink {
    return this._selectedLink;
  }

  public set selectedLink(link: DataEntryNavigationLink) {
     this._selectedLink = link;
     this.selectedLinkChange$.next(link);
  }

  constructor() { }


}