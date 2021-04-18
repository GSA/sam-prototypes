import { OnInit, Component, ChangeDetectionStrategy } from '@angular/core';
import { WorkspaceSummary, WorkspaceService } from '../services/workspace-service/workspace.service';

@Component({
  selector: 'workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['_styles.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class WorkspaceComponent implements OnInit {
  title: string = 'Workspace';

  opportunities: WorkspaceSummary;
  assistanceListings: WorkspaceSummary;
  userDirectory: WorkspaceSummary;
  systemAccounts: WorkspaceSummary;
  entityRegistration: WorkspaceSummary;

  constructor(private workspaceService: WorkspaceService) {
  }

  ngOnInit() {
      this.workspaceService.workspaces.subscribe( (workspaces: WorkspaceSummary[]) =>
        {
          this.initWorkspaces(workspaces);
        });
  }

  initWorkspaces(workspaces) {
    for(let i=0; i<workspaces.length; i++) {
        switch(workspaces[i].domain) {
          case 'opportunities': {
            this.opportunities = workspaces[i];
            break;
          }
          case 'assistanceListings': {
            this.assistanceListings = workspaces[i];
            break;
          }
          case 'entityRegistration': {
            this.entityRegistration = workspaces[i];
          }
          default: {
            break;
          }
        }
    }
  }

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }
}
