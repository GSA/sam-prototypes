import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, TemplateRef  } from '@angular/core';
import { ActivatedRoute, Router, ActivationEnd } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SamModelService } from '../../model/sam-model.service';
import { SearchTools } from './sam-search.config';
import { SamSearchService } from './service/sam-search.service';

@Component({
  selector: 'sam-search',
  templateUrl: './sam-search.component.html',
  styleUrls: ['./_styles.scss']
})
export class SamSearchComponent implements AfterViewInit, OnInit {

  @Input() bodyTemplate: TemplateRef<any>;

  @ViewChild('search') searchTool: ElementRef;
  @ViewChild('share') shareTool: ElementRef;
  @ViewChild('save') saveTool: ElementRef;
  @ViewChild('download') downloadTool: ElementRef;

  domain: string;

  constructor(private router: Router, private route: ActivatedRoute, public model: SamModelService, public searchService: SamSearchService) {  
      router.events.subscribe((event) => {
        if(event instanceof ActivationEnd && event.snapshot.component == SamSearchComponent) {      
           this.model.setLocalTools(SearchTools);
        }
      });
  }

  ngOnInit() {
      this.domain = this.route.snapshot.queryParamMap.get('domain');
      this.route.queryParamMap.subscribe(queryParams => {
        this.domain = queryParams.get('domain');
        this.searchService.setDomain(this.domain);
      })
  }

  loadTemplates() {
     this.model.setToolTemplate('search', this.searchTool);
     this.model.setToolTemplate('share', this.shareTool);
     this.model.setToolTemplate('save', this.saveTool);
     this.model.setToolTemplate('download', this.downloadTool);
     this.model.setSelectedTool(SearchTools[0]);
  }

  ngAfterViewInit()
  {
        setTimeout(() => {
            this.loadTemplates();
        });
  }

}
