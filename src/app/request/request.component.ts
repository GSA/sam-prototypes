import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, TemplateRef  } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SamModelService } from '../model/sam-model.service';
import { RequestTools } from './request.config';

@Component({
  selector: 'sam-request',
  templateUrl: './request.component.html',
  styleUrls: ['./_styles.scss']
})
export class RequestComponent implements OnInit {

  @ViewChild('requests') requestsTool: ElementRef;
  @ViewChild('download') downloadTool: ElementRef;

  domain: string;

  constructor(private router: Router, public model: SamModelService) {
      router.events.subscribe((event) => {
        if(event instanceof ActivationEnd && event.snapshot.component == RequestComponent) {      
           this.model.setLocalTools(RequestTools);
        }
      });
  }

  ngOnInit() {
  }

  loadTemplates() {
     this.model.setToolTemplate('requests', this.requestsTool);
     this.model.setToolTemplate('download', this.downloadTool);
     this.model.setSelectedTool(RequestTools[0]);
  }

  ngAfterViewInit()
  {
        setTimeout(() => {
            this.loadTemplates();
        });
  }

}