import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SystemAccountsService } from '../../service/system-accounts.service';

@Component({
  selector: 'app-sa-edit-details',
  templateUrl: './sa-edit-details.component.html',
  styleUrls: ['./sa-edit-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaEditDetailsComponent implements OnInit {

  constructor(public service: SystemAccountsService) { }

  ngOnInit() {
  }

}
