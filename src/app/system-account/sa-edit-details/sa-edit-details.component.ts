import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SystemAccountDataService } from '../system-account-data/system-account-data.service';

@Component({
  selector: 'app-sa-edit-details',
  templateUrl: './sa-edit-details.component.html',
  styleUrls: ['./sa-edit-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaEditDetailsComponent implements OnInit {

  constructor(public service: SystemAccountDataService) { }

  ngOnInit() {
  }

}
