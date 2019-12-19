import { Component, OnInit, AfterContentInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { SystemAccountData } from '../../../system-account/system-account-data/system-account.model';
import { ThisSiteModule } from 'src/app/about/this-site/this-site.module';

@Component({
  selector: 'system-account-item',
  templateUrl: './system-account-item.component.html',
  styleUrls: ['./system-account-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemAccountItemComponent implements OnInit, AfterContentInit {


  @Input() model: SystemAccountData;

  menu = {
    trigger: 'primary',
    actions: [
      { id: 'ViewBtn', icon: 'bars', text: 'View' }

    ]
  };

  ngOnInit() {

  }

  ngAfterContentInit(): void {
    switch (this.model.status) {
      case 'Draft':
        this.menu.actions.push({ id: 'deleteBtn', icon: 'bars', text: 'Delete Draft' });
        this.menu.actions.push({ id: 'submitBtn', icon: 'bars', text: 'Submit' });
        break;
      case 'Active':
        this.menu.actions.push({ id: 'updateBtn', icon: 'bars', text: 'Update' });
        this.menu.actions.push({ id: 'dactivateBtn', icon: 'bars', text: 'Deactivate' });
        break;
      case 'Pending':
        this.menu.actions.push({ id: 'cancelBtn', icon: 'bars', text: 'Cancel' });
        break;
      default:
      
    }
  }

  log(value) {
    console.log(`%cLog: ${value} clicked in result item ${this.model.info.accountName}`, 'color: blue; font-weight: bold');
  }


}
