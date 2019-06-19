import { Component, OnInit, Input, ChangeDetectorRef, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, UrlSegment } from '@angular/router';
import { SamModelService } from '../model/sam-model.service';
import { WorkspaceModelService } from './service/workspace-model.service';
import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';
import { workspaceSideNavigationData } from './navigation/navigation.data';
@Component({
  selector: 'workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['_styles.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class WorkspaceComponent implements OnInit, AfterViewInit {

  constructor(private change: ChangeDetectorRef, public workspaceModel: WorkspaceModelService, public model: SamModelService) {
  }




  ngOnInit() {

  }

  ngAfterViewInit() {
    this.change.detectChanges();
  }
  public sideNavModel: SideNavigationModel = workspaceSideNavigationData;


}



