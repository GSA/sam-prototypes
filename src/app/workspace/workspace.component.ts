import { Component, OnInit, Input, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, UrlSegment } from '@angular/router';
import { SamModelService } from '../model/sam-model.service';
import { WorkspaceModelService } from './service/workspace-model.service';

@Component({
  selector: 'workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['_styles.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class WorkspaceComponent implements OnInit, AfterViewInit {

  constructor(private route: ActivatedRoute, private router: Router, public workspaceModel: WorkspaceModelService, public model: SamModelService) {  
  }

  setView(view: string) {
    this.workspaceModel.view = view;
  }


  ngOnInit() {
      this.router.events.subscribe(event => {
	      if (event instanceof NavigationEnd) {
	        console.log('NavigationEnd event', event);
	      }
    })
  }

  ngAfterViewInit() {
  }
}



