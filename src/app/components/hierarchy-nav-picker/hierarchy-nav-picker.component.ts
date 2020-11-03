import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HierarchyService} from '../../services/hierarchy-service/hierarchy.service';

@Component({
  selector: 'hierarchy-nav-picker',
  templateUrl: './hierarchy-nav-picker.component.html',
  styleUrls: ['./hierarchy-nav-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HierarchyNavPickerComponent implements OnInit {

  data: any[] = [];
  parentKey: string = null;
  breadcrumbs: any[] = [
  	{
  		id: '0000000',
  		name: 'Root',
  	}
  ];

  displayedColumns: string[] = ['fpdsCode', 'name', 'levelLabel'];

  sortColumns: string[] = ['name'];

  constructor(public service: HierarchyService) { 
     this.data = service.getAllDataForLevel(1);
  }

  navigate(value) {
     let node = this.service.getHierarchyNode(value.currentTarget.name);
     if(node) {
     	this.breadcrumbs.push({
     			id: node.key,
     			name: node.name
     	});
     }
     this.data = this.service.getChildData(value.currentTarget.name);
  }

  breadcrumbSelected(target) {
    if(target.name == 'Root') {
    	this.breadcrumbs.length = 1;
    	this.data = this.service.getAllDataForLevel(1);
    	return;
    }
  	let node = this.service.getHierarchyNode(target.id);
  	if(node) {
  		this.breadcrumbs.length = this.breadcrumbs.findIndex(breadcrumb => breadcrumb.id == node.key) + 1;  	
  		this.data = this.service.getChildData(target.id);
  	}
  }

  ngOnInit() {
  }

}
