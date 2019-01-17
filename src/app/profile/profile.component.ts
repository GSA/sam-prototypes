import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, TemplateRef } from '@angular/core';
import { SamModelService } from '../model/sam-model.service';
import { ToolItem } from '../sam-ui-elements/tools/tool-item';
import { ProfileTools } from './profile.config';

@Component({
  selector: 'sam-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./_styles.scss']
})
export class ProfileComponent implements AfterViewInit, OnInit {

  @ViewChild('profile') profileTool: ElementRef;
  @ViewChild('history') historyTool: ElementRef;
  @ViewChild('download') downloadTool: ElementRef;

  constructor(public model: SamModelService) { 
  	  this.model.setMainNavigationVisible(false);
  	  this.model.setLocalTools(ProfileTools);
  }

  ngOnInit() {
  }

  loadTemplates() {
     this.model.setToolTemplate('profile', this.profileTool);
     this.model.setToolTemplate('history', this.historyTool);
     this.model.setToolTemplate('download', this.downloadTool);
     this.model.setSelectedTool(ProfileTools[0]);
  }

  ngAfterViewInit()
  {
        setTimeout(() => {
            this.loadTemplates();
        });
  }

}
