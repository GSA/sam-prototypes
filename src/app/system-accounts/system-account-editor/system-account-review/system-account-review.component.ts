import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyUtilsService } from '@gsa-sam/sam-formly';

import { SystemAccountEditorService } from '../system-account-editor-service/system-account-editor.service';

@Component({
  selector: 'app-system-account-review',
  templateUrl: './system-account-review.component.html'
})
export class SystemAccountReviewComponent implements OnInit {

  form = new FormGroup({});

  constructor(public editorService: SystemAccountEditorService) { 
  }

  ngOnInit(): void {
  }

}
