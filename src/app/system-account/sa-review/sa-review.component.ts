import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemAccountDataService } from '../system-account-data/system-account-data.service';
import { SystemAccountData, SystemPermission } from '../system-account-data/system-account.model';

@Component({
  selector: 'app-sa-review',
  templateUrl: './sa-review.component.html',
  styleUrls: ['./sa-review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaReviewComponent implements OnInit {

  model: SystemAccountData;

  constructor(public service: SystemAccountDataService, private route: ActivatedRoute) { 
  }

  formatPermissions(permissions: SystemPermission[]) {
     let resultList = new Array<string>();
     for(let i=0; i<permissions.length; i++) {
         if(permissions[i].hasAccess) {
             resultList.push(permissions[i].label);
         }
     }
     if(resultList.length > 0) {
     	return resultList.join(',');
     }
     return 'None';
  }

  ngOnInit() {
    this.model = this.service.getCurrentAccount();
  }

}
