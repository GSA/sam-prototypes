import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, TemplateRef  } from '@angular/core';
import { Router, ActivatedRoute, ActivationEnd } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SamModelService } from '../model/sam-model.service';
import { HelpTools } from './help.config';

@Component({
  selector: 'sam-help',
  templateUrl: './help.component.html',
  styleUrls: ['./_styles.scss']
})
export class HelpComponent implements OnInit {

  @ViewChild('help') helpTool: ElementRef;

  domain: string;

  constructor(private router: Router, private route: ActivatedRoute, public model: SamModelService) {
      router.events.subscribe((event) => {
        if(event instanceof ActivationEnd && event.snapshot.component == HelpComponent) {      
           this.model.setLocalTools(HelpTools);
        }
      });
  }

  ngOnInit() {
      this.domain = this.route.snapshot.queryParamMap.get('domain');
      this.route.queryParamMap.subscribe(queryParams => {
        this.domain = queryParams.get('domain');
        if(!this.domain) {
      		this.domain = 'all';
      	}
      })
  }

  loadTemplates() {
     this.model.setToolTemplate('help', this.helpTool);
     this.model.setSelectedTool(HelpTools[0]);
  }

  ngAfterViewInit()
  {
        setTimeout(() => {
            this.loadTemplates();
        });
  }

}
