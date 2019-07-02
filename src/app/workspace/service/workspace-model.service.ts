import { Injectable, TemplateRef } from '@angular/core';
import { WorkspaceModelModule } from './workspace-model.module';

import { SamModelService } from '../../model/sam-model.service';
import { BehaviorSubject } from 'rxjs'; 
@Injectable({
  providedIn: WorkspaceModelModule
})
export class WorkspaceModelService {

  title: string;
  page: string;
  view: string;
  showNav: boolean;
  showFilters: boolean;
  showSearchBar: boolean;
  placeholderText: string;
  template: TemplateRef<any>;
 
  constructor(public model: SamModelService) {
    this.page = 'dashboard';
    this.view = 'closed';
    this.title = 'Workspace Home';
    this.showNav = true;
    this.showFilters = false;
    this.showSearchBar = false;
    this.placeholderText = "Enter an id or keyword";
    this.template = null;
    this.model.feature = 'workspace';
  }

 

  isPageInDomain(parentDomain: string) {
    if(parentDomain == 'contractinginfo') {
      return this.page == 'contractinginfo' || this.page == 'contractopportunities' || this.page == 'contractdata';
    }
    if(parentDomain == 'entityinfo') {
      return this.page == 'entityinfo' || this.page == 'registrations' || this.page == 'disasterresponse' ||
            this.page == 'exclusions' || this.page == 'integrityinfo';
    }
    if(parentDomain == 'assistancelist') {
      return this.page == 'cfdanumber' || this.page == 'assistancelist' || this.page == 'regionallocation' || this.page == 'assistancedashboard';
    }
    if(parentDomain == 'wagedeterminations') {
        return this.page == 'wagedeterminations' || this.page == 'dbawd' || this.page == 'scawd';
    }
  }
}
