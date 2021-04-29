import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app-service/app.service';

@Component({
  selector: 'app-account-roles',
  templateUrl: './account-roles.component.html'
})
export class AccountRolesComponent implements OnInit {

  displayedColumns: string[] = ['organization', 'role', 'domains', 'status'];

  roles: any[];

  constructor(private appService: AppService) { 
  	this.roles = this.appService.user.roles;
  }

  ngOnInit() {
  }

  customSort(data, sortHeaderId) {
    switch (sortHeaderId) {
      default: {
        if (typeof data[sortHeaderId] === 'string') {
          return data[sortHeaderId].toLocaleLowerCase();
        }

        return data[sortHeaderId];
      }
    }
  };
}
