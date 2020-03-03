import {
  OnInit,
  Component,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['_styles.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class WorkspaceComponent implements OnInit {
  title: string = 'Workspace';

  constructor() {
  }

  ngOnInit() {

  }


  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }
}
