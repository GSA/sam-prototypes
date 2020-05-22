import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'assistancelist-item',
  templateUrl: './assistancelist-item.component.html',
  styleUrls: ['./assistancelist-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssistancelistItemComponent implements OnInit {

  constructor(private change: ChangeDetectorRef) { }

  @Input() model: any;

  menu = {
    trigger: 'primary',
    actions: [
      { id: 'update', icon: 'bars', text: 'Update' },
      { id: 'archive', icon: 'bars', text: 'Archive' },
      { id: 'numberch', icon: 'bars', text: 'Change Number' },
      { id: 'titlech', icon: 'bars', text: 'Change Title' },
      { id: 'agencych', icon: 'bars', text: 'Change Agency' }
    ]
  };

  ngOnInit() {}

   log(value) {
    console.log(`%cLog: ${value} clicked`, 'color: blue; font-weight: bold');
  }

}
