import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, TemplateRef  } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SamModelService } from '../../../model/sam-model.service';
import { EntitiesTools } from './entities.config';

@Component({
  selector: 'entity-workspace',
  templateUrl: './entities-list.component.html',
  styleUrls: ['./_styles.scss']
})
export class EntitiesListComponent implements AfterViewInit, OnInit {

  @Input() bodyTemplate: TemplateRef<any>;

  @ViewChild('entities') entitiesTool: ElementRef;
  @ViewChild('download') downloadTool: ElementRef;

  constructor(private router: Router, public model: SamModelService) {  
      router.events.subscribe((event) => {
        if(event instanceof ActivationEnd && event.snapshot.component == EntitiesListComponent) {      
           this.model.setLocalTools(EntitiesTools);
        }
      });
  }

  ngOnInit() {
  }

  loadTemplates() {
     this.model.setToolTemplate('entities', this.entitiesTool);
     this.model.setToolTemplate('download', this.downloadTool);
     this.model.setSelectedTool(EntitiesTools[0]);
  }

  ngAfterViewInit()
  {
        setTimeout(() => {
            this.loadTemplates();
        });
  }

}
