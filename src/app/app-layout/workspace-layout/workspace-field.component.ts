import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'workspace-field',
  template: `
     <div class="sds-field sds-field--stacked sds-field--small sds-field--featured">
        <div class="sds-field__name">{{label}}</div>
        <div class="sds-field__value sds-field__value--small">
			<ng-content></ng-content>
        </div>
     </div>`
})
export class WorkspaceFieldComponent implements OnInit {

  @Input() label;

  constructor() { }

  ngOnInit(): void {
  }

}
