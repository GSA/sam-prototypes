import { OnInit, Component, ViewChild, TemplateRef, ChangeDetectionStrategy } from '@angular/core';
import { INavigationLink, NavigationMode } from '@gsa-sam/components';
import { SearchParameters, SearchResult } from '@gsa-sam/layouts';
import { WorkspaceSummary } from '../services/interfaces/public-apis';
import { WorkspaceService } from '../services/workspace-service/workspace.service';
import { NotificationsService } from '../services/feed-services/notifications.service';
import { RequestsService } from '../services/feed-services/requests.service';
import { FeedItem } from '../services/interfaces/public-apis';

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

  @ViewChild('responsibilityQualificationTemplate', { static: false })
  responsibilityQualificationTemplate: TemplateRef<any>;

  workspaces: WorkspaceSummary[];
  requests: FeedItem[];
  notifications: FeedItem[];

  feedParameters: SearchParameters = {
    page: {
      pageNumber: 1,
      pageSize: 5,
      totalPages: -1
    },
    sortField: 'dateDescending',
    filter: {

    }
  }

  moreNotificationsLink: INavigationLink = {
    text: "More Notifications",
    route: "https://fsd.gov/",
    mode: NavigationMode.EXTERNAL
  };

  moreRequestsLink: INavigationLink = {
    text: "More Requests",
    route: "https://fsd.gov/",
    mode: NavigationMode.EXTERNAL
  };

  constructor(private workspaceService: WorkspaceService, 
    public requestsService: RequestsService,
    public notificationsService: NotificationsService) {
    this.workspaceService.workspaces.subscribe( (workspaces: WorkspaceSummary[]) =>
        {
          this.workspaces = workspaces;
        });
  }

  ngOnInit() {
    this.requestsService.getData(this.feedParameters).subscribe((results: SearchResult) =>
      {
        this.requests = results.items;
      });
    this.notificationsService.getData(this.feedParameters).subscribe((results: SearchResult) =>
      {
        this.notifications = results.items;
      });
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
        case 'responsibilityQualification': {
          return this.responsibilityQualificationTemplate;
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
