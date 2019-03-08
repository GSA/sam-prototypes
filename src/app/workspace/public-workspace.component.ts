import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-public-workspace',
  templateUrl: './public-workspace.component.html',
  styleUrls: ['./public-workspace.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicWorkspaceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
