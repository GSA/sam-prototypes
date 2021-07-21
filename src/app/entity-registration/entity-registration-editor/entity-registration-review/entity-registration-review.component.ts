import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EntityRegistrationEditorService } from '../../services/entity-registration-editor-service/entity-registration-editor.service';

@Component({
  selector: 'app-entity-registration-review',
  templateUrl: './entity-registration-review.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntityRegistrationReviewComponent implements OnInit {

  constructor(private service: EntityRegistrationEditorService) { }

  ngOnInit(): void {
  }

}
