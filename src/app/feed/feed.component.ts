import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, TemplateRef  } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SamModelService } from '../model/sam-model.service';
import { FeedTools } from './feed.config';

@Component({
  selector: 'sam-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./_styles.scss']
})
export class FeedComponent implements OnInit {

  @ViewChild('messages') messagesTool: ElementRef;
  @ViewChild('download') downloadTool: ElementRef;

  domain: string;

  constructor(private router: Router, public model: SamModelService) {
      router.events.subscribe((event) => {
        if(event instanceof ActivationEnd && event.snapshot.component == FeedComponent) {      
           this.model.setLocalTools(FeedTools);
        }
      });
  }

  ngOnInit() {
  }

  loadTemplates() {
     this.model.setToolTemplate('messages', this.messagesTool);
     this.model.setToolTemplate('download', this.downloadTool);
     this.model.setSelectedTool(FeedTools[0]);
  }

  ngAfterViewInit()
  {
        setTimeout(() => {
            this.loadTemplates();
        });
  }

}