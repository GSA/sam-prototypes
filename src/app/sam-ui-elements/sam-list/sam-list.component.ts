import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sam-list',
  templateUrl: './sam-list.component.html',
  styleUrls: ['./_styles.scss']
})
export class SamListComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
