import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';
import { HierarchyService } from '../../services/hierarchy-service/hierarchy.service';

@Component({
  selector: 'app-federal-hierarchy-editor',
  templateUrl: './federal-hierarchy-editor.component.html'
})
export class FederalHierarchyEditorComponent implements OnInit {

    model: any;
    newOrgLabel: string;

    @ViewChild('sideNavigation') sideNav;

	public sideMenu: SideNavigationModel = {
	    navigationLinks: []
	 };


  constructor(private route: ActivatedRoute, public service: HierarchyService) { }

  ngOnInit(): void {  
    let key = this.route.snapshot.paramMap.get('id');
    this.updateKey(key);

    this.route.paramMap.subscribe((params : ParamMap)=> {  
       	let key = params.get('id');  
		this.updateKey(key);
    }); 

  }

  updateKey(key: string) {
    this.model = this.service.getHierarchyNode(key);
    if(!this.model) { return; }
    switch (this.model.org.type) {
    	case "OFFICE": {
    		this.newOrgLabel = null;
    		this.sideMenu.navigationLinks = [
			    { text: 'Details', id: 'hierarchy-profile', route: 'details', queryParams: {}, mode: NavigationMode.INTERNAL },
			    { text: 'Settings', id: 'hierarchy-settings', route: 'settings', queryParams: {}, mode: NavigationMode.INTERNAL },
			    { text: 'History', id: 'hierarchy-history', route: 'history', queryParams: {}, mode: NavigationMode.INTERNAL }
			];
			break;
    	}
    	default: {
     		this.newOrgLabel = "Create New";
    		this.sideMenu.navigationLinks = [
			    { text: 'Hierarchy', id: 'hierarchy-children', route: 'children', queryParams: {}, mode: NavigationMode.INTERNAL },
			    { text: 'Details', id: 'hierarchy-profile', route: 'details', queryParams: {}, mode: NavigationMode.INTERNAL },
			    { text: 'Settings', id: 'hierarchy-settings', route: 'settings', queryParams: {}, mode: NavigationMode.INTERNAL },
			    { text: 'History', id: 'hierarchy-history', route: 'history', queryParams: {}, mode: NavigationMode.INTERNAL }
			];
			break;   	
    	}
    }
  }


  onNavigateLink(event) {
  	console.log("Navigating...");
  }

  onDownload(event) {
    console.log("Downloading...");
  }
}
