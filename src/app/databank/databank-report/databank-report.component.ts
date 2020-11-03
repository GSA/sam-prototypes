import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DatabankService } from '../../services/databank-service/databank.service';

@Component({
  selector: 'app-databank-report',
  templateUrl: './databank-report.component.html',
  styleUrls: ['./databank-report.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatabankReportComponent implements OnInit {

  public report: any;
  public showDescription: boolean = false;
  public showCriteria: boolean = true;

  public subheaderActions = {
    buttons: [],
    actions: [
      { id: 'saveAction', icon: 'bars', text: 'Save' },
      { id: 'saveAsAction', icon: 'bars', text: 'Save As' }
    ]
  };

  constructor(private location: Location, private route: ActivatedRoute, private databankService: DatabankService) { }

  ngOnInit() {  
    let id = this.route.snapshot.paramMap.get('id');
    this.report = this.databankService.getReport(id);
  }

  back() {
      this.location.back();
  }

  toggleCriteria() {
    this.showCriteria = !this.showCriteria;
    if(this.showCriteria) {
        this.showDescription = false;
    }
  }

  toggleDescription() {
  	this.showDescription = !this.showDescription;
  	if(this.showDescription) {
  	    this.showCriteria = false;
  	}
  }

  log(event) {

  }

}
