import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { SamModelService } from '../model/sam-model.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'sam-databank',
  templateUrl: './databank.component.html',
  styleUrls: ['./databank.component.scss']
})
export class DatabankComponent implements OnInit {

  constructor(public model: SamModelService) {}

  ngOnInit() {
    
  }

}
