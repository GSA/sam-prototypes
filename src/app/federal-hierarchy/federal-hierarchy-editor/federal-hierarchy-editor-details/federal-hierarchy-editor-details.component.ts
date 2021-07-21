import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HierarchyService } from '../../../services/hierarchy-service/hierarchy.service';

@Component({
  selector: 'app-federal-hierarchy-editor-details',
  templateUrl: './federal-hierarchy-editor-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FederalHierarchyEditorDetailsComponent implements OnInit {
    
  model: any;

  constructor(private route: ActivatedRoute, public service: HierarchyService) { }

  ngOnInit(): void {  
    let key = this.route.parent.parent.snapshot.paramMap.get('id');
    this.model = this.service.getHierarchyNode(key);
  }
}
