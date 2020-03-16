import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { HelpService } from '../service/help.service';

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpPageComponent implements OnInit {

  public model: {};
  public id: string;

  constructor(public service: HelpService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if(this.id) {
        this.service.getById(this.id).subscribe(result => {
        	this.model = result.item;
        });
      }
    });
  }

  previous() {

  }

  next() {

  }

}
