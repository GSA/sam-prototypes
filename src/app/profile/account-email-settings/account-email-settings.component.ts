import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppService } from '../../services/app-service/app.service';

@Component({
  selector: 'app-account-email-settings',
  templateUrl: './account-email-settings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountEmailSettingsComponent implements OnInit {

  public user: any;

  displayedColumns: string[] = ['title', 'frequency'];


  constructor(private appService: AppService) { 
  	this.user = this.appService.user;
  }

  ngOnInit(): void {
  }

}
