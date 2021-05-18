import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';
import { EntityRegistrationService } from '../../services/entity-registration-service/entity-registration.service';

@Component({
  selector: 'app-entity-registration-editor',
  templateUrl: './entity-registration-editor.component.html'
})
export class EntityRegistrationEditorComponent implements OnInit {

    model: any;

    @ViewChild('sideNavigation') sideNav;

	public sideMenu: SideNavigationModel = {
	    navigationLinks: [
		    { text: 'Review', id: 'hierarchy-children', route: 'review', queryParams: {}, mode: NavigationMode.INTERNAL },
		    { text: 'Edit', id: 'hierarchy-profile', route: '', queryParams: {}, mode: NavigationMode.INTERNAL },
		    { text: 'Preview', id: 'hierarchy-settings', route: 'preview', queryParams: {}, mode: NavigationMode.INTERNAL },
		    { text: 'History', id: 'hierarchy-history', route: 'history', queryParams: {}, mode: NavigationMode.INTERNAL }
	    ]
	 };


  constructor(private route: ActivatedRoute, public service: EntityRegistrationService) { }

  ngOnInit(): void {  
    let key = this.route.snapshot.paramMap.get('id');
    this.updateKey(key);

    this.route.paramMap.subscribe((params : ParamMap)=> {  
       	let key = params.get('id');  
		this.updateKey(key);
    }); 


  }

  updateKey(key: string) {
    this.model = this.service.getRecord(key);
    this.sideMenu.navigationLinks[1].route = '/entity-registration/form/' + key;
  }


  onNavigateLink(event) {
  	console.log("Navigating...");
  }

  onDownload(event) {
    console.log("Downloading...");
  }

}
