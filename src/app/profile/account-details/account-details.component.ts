import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppService } from '../../services/app-service/app.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountDetailsComponent implements OnInit {

  user: any;

  constructor(private appService: AppService) { 
  	this.user = appService.user;
  }

  ngOnInit() {
  }

}
