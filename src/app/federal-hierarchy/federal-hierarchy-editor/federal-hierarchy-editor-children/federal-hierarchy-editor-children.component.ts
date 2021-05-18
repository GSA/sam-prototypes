import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HierarchyService } from '../../../services/hierarchy-service/hierarchy.service';

@Component({
  selector: 'app-federal-hierarchy-editor-children',
  templateUrl: './federal-hierarchy-editor-children.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FederalHierarchyEditorChildrenComponent implements OnInit {

  children: any[]

  constructor(private route: ActivatedRoute, public service: HierarchyService) { }

  ngOnInit(): void {  
    let key = this.route.parent.parent.snapshot.paramMap.get('id');

    this.route.parent.parent.paramMap.subscribe((params : ParamMap)=> {  
       	let key = params.get('id');  
		this.children = this.service.getChildData(key);
    }); 
  }

}
