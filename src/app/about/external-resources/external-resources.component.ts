import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-external-resources',
  templateUrl: './external-resources.component.html',
  styleUrls: ['./external-resources.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExternalResourcesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
