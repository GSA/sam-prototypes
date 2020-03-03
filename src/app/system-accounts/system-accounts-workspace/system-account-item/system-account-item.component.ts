import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'system-account-item',
  templateUrl: './system-account-item.component.html',
  styleUrls: ['./system-account-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemAccountItemComponent implements OnInit {

  @Input() model: any;

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
    console.log(`%cLog: ${value} clicked in result item ${this.model.versions[0].info.accountName}`, 'color: blue; font-weight: bold');
  }


}