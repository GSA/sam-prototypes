import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppService } from '../../services/app-service/app.service';

@Component({
  selector: 'app-account-email-settings',
  templateUrl: './account-email-settings.component.html'
})
export class AccountEmailSettingsComponent implements OnInit {

  public emailSettings: any[];

  displayedColumns: string[] = ['title', 'frequency'];


  constructor(private changeDetectRef:ChangeDetectorRef, private appService: AppService) { 	  	

  }

  ngOnInit(): void {
    	this.appService.getEmailSettings().subscribe((settings: any[]) => { 
			this.emailSettings = settings;
			this.changeDetectRef.detectChanges();
		});
  }

  ngAfterViewInit() {
  }

}
