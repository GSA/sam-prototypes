import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EntityThreeSixtyService } from './services/entity-three-sixty-service/entity-three-sixty.service';

@Component({
  selector: 'app-entity-three-sixty',
  templateUrl: './entity-three-sixty.component.html'
})
export class EntityThreeSixtyComponent implements OnInit {

  constructor(private route: ActivatedRoute, public service: EntityThreeSixtyService) { }

  ngOnInit(): void {  
    let key = this.route.snapshot.paramMap.get('id');
    this.updateKey(key);

    this.route.paramMap.subscribe((params : ParamMap)=> {  
        let key = params.get('id');  
    this.updateKey(key);
    }); 

  }

  updateKey(key: string) {
    this.service.setEntityById(key);
  }

}
