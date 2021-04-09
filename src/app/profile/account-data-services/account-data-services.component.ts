import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app-service/app.service';

@Component({
  selector: 'app-account-data-services',
  templateUrl: './account-data-services.component.html'
})
export class AccountDataServicesComponent implements OnInit {
  
  displayedColumns: string[] = ['document', 'domain', 'dateSigned', 'actions'];

  public agreementActions = {
    actions: [
      { id: 'download', icon: 'bars', text: 'Download' }
    ]
  };

  public user: any;

  constructor(private appService: AppService) { 
  	this.user = this.appService.user;
  }

  ngOnInit(): void {
  }

  actionClicked(document) {

  }

}
