import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app-service/app.service';

@Component({
  selector: 'app-account-data-services',
  templateUrl: './account-data-services.component.html'
})
export class AccountDataServicesComponent implements OnInit {
  
  displayedColumns: string[] = ['document', 'domain', 'dateSigned'];

  public agreementActions = {
    actions: [
      { id: 'download', icon: 'bars', text: 'Download' }
    ]
  };

  public dataServiceAgreements: [];

  constructor(private appService: AppService) { 
  	this.dataServiceAgreements = this.appService.user.dataServiceAgreements;
  }

  ngOnInit(): void {
  }

  actionClicked(document) {

  }

}
