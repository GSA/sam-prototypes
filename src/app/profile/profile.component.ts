import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { profileNavigationData } from './navigation.data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

  public navigationData = profileNavigationData;

  constructor() { }

  ngOnInit() {
  }

}
