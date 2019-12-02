import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { SystemAccountData } from '../../../system-account/system-account-data/system-account.model';

@Component({
  selector: 'system-account-item',
  templateUrl: './system-account-item.component.html',
  styleUrls: ['./system-account-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemAccountItemComponent implements OnInit {

  @Input() model: SystemAccountData;

  menu = {
    trigger: 'primary',
    actions: [
      { id: 'ViewBtn', icon: 'bars', text: 'View' },
      { id: 'UpdateBtn', icon: 'bars', text: 'Update' },
      { id: 'DeactivateBtn', icon: 'bars', text: 'Deactivate' }
    ]
  };

  ngOnInit() {
  
  }

  log(value) {
    console.log(`%cLog: ${value} clicked in result item ${this.model.info.accountName}`, 'color: blue; font-weight: bold');
  }


}
