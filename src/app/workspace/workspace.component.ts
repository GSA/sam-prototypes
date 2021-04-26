import { OnInit, Component, ViewChild, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { WorkspaceSummary } from '../services/interfaces/public-apis';
import { WorkspaceService } from '../services/workspace-service/workspace.service';

@Component({
  selector: 'workspace',
  templateUrl: './workspace.component.html',
})
export class WorkspaceComponent implements OnInit {
  title: string = 'Workspace';

  @ViewChild('assistanceListingsTemplate', { static: false })
  assistanceListingsTemplate: TemplateRef<any>;

  @ViewChild('contractOpportunitiesTemplate', { static: false })
  contractOpportunitiesTemplate: TemplateRef<any>;

  @ViewChild('entityRegistrationTemplate', { static: false })
  entityRegistrationTemplate: TemplateRef<any>;

  @ViewChild('cbaTemplate', { static: false })
  cbaTemplate: TemplateRef<any>;

  @ViewChild('systemAccountsTemplate', { static: false })
  systemAccountsTemplate: TemplateRef<any>;

  @ViewChild('federalHierarchyTemplate', { static: false })
  federalHierarchyTemplate: TemplateRef<any>;

  @ViewChild('userDirectoryTemplate', { static: false })
  userDirectoryTemplate: TemplateRef<any>;

  @ViewChild('entityReportingTemplate', { static: false })
  entityReportingTemplate: TemplateRef<any>;

  workspaces: WorkspaceSummary[];

  constructor(private workspaceService: WorkspaceService) {
        this.workspaceService.workspaces.subscribe( (workspaces: WorkspaceSummary[]) =>
        {
          this.workspaces = workspaces;
        });
  }

  ngOnInit() {

  }

  getTemplate(domain) {
      switch(domain) {
        case 'opportunities': {
          return this.contractOpportunitiesTemplate;
          break;
        }
        case 'assistanceListings': {
          return this.assistanceListingsTemplate;
          break;
        }
        case 'entityRegistration': {
          return this.entityRegistrationTemplate;
        }
        case 'cba': {
          return this.cbaTemplate;
        }
        case 'systemAccounts': {
           return this.systemAccountsTemplate;
        }
        case 'federalHierarchy': {
          return this.federalHierarchyTemplate;
        }
        case 'userDirectory': {
          return this.userDirectoryTemplate;
        }
        case 'entityReporting': {
          return this.entityReportingTemplate;
        }
        default: {
          return null;
          break;
        }
      }
  }

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }
}
