import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserRolesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
