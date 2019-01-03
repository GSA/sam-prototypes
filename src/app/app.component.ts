import { Component, ElementRef, ViewChild } from '@angular/core';
import { SamModelService } from './model/sam-model.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./_styles.scss']
})
export class AppComponent {
  
  title = 'sam-gov';
  model: SamModelService;

  @ViewChild('glossary') glossaryTool: ElementRef;
  @ViewChild('feedback') feedbackTool: ElementRef;
  @ViewChild('helpdesk') helpdeskTool: ElementRef;

  constructor(model: SamModelService) {
    this.model = model;

  }

  ngOnInit() {

  }

  ngAfterViewInit()
  {
        setTimeout(() => {          
            this.model.setToolTemplate('glossary', this.glossaryTool);
            this.model.setToolTemplate('feedback', this.feedbackTool);
            this.model.setToolTemplate('helpdesk', this.helpdeskTool);
        });
  }

  ngOnDestroy() {

  }
}
