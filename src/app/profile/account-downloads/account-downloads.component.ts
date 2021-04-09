import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-account-downloads',
  templateUrl: './account-downloads.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountDownloadsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
