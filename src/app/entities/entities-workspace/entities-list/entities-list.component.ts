import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../store/reducers';

@Component({
  selector: 'entities-list',
  templateUrl: './entities-list.component.html',
  styleUrls: ['./_styles.scss']
})
export class EntitiesListComponent implements OnInit {

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
  }

}
