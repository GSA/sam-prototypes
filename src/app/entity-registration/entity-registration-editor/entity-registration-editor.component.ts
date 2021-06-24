import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NavigationLink, NavigationMode } from '@gsa-sam/components';
import { EntityRegistrationEditorService } from '../services/entity-registration-editor-service/entity-registration-editor.service';

@Component({
  selector: 'app-entity-registration-editor',
  templateUrl: './entity-registration-editor.component.html'
})
export class EntityRegistrationEditorComponent implements OnInit {

    model: any;

  constructor(private route: ActivatedRoute, public service: EntityRegistrationEditorService) { }

  ngOnInit(): void {  
    let key = this.route.snapshot.paramMap.get('id');
    this.updateKey(key);

    this.route.paramMap.subscribe((params : ParamMap)=> {  
       	let key = params.get('id');  
		this.updateKey(key);
    }); 


  }

  updateKey(key: string) {
    this.service.setRegistrationById(key);
  }


  onNavigateLink(event) {
  	console.log("Navigating...");
  }

  onDownload(event) {
    console.log("Downloading...");
  }

}
