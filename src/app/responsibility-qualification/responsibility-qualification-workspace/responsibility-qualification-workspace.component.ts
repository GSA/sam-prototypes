import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-responsibility-qualification-workspace',
  templateUrl: './responsibility-qualification-workspace.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResponsibilityQualificationWorkspaceComponent implements OnInit {

  title: string = 'Responsibility / Qualification';
  placeholder: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
