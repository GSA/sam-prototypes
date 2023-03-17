import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'entity-subheader',
  templateUrl: './entity-subheader.component.html'
})
export class EntitySubheaderComponent implements OnInit {

  title:string;

  constructor() { }

  ngOnInit(): void {
    this.title = "New Entity";
  }

}
