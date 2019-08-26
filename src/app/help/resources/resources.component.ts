import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

import { helpNavigationData} from './navigation/navigation.data';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourcesComponent implements OnInit {

  public sideNavModel: SideNavigationModel = helpNavigationData;

  constructor() { }

  ngOnInit() {
  }

}
