import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppService } from '../../services/app-service/app.service';

@Component({
  selector: 'app-account-following',
  templateUrl: './account-following.component.html',
  styleUrls: ['../../components/display/display.scss']
})
export class AccountFollowingComponent implements OnInit {

  followings: any[];


  get pagingText() {
     return 'Showing 1 to 10 of 25';
  }

  constructor(private appService: AppService) { 	  	

  }

  ngOnInit(): void {
    	this.appService.getFollowings().subscribe((followings: any[]) => { 
			this.followings = followings;
		});
  }


}
