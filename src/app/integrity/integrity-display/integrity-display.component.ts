import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IntegrityService } from '../../services/integrity-service/integrity.service';

@Component({
  selector: 'app-integrity-display',
  templateUrl: './integrity-display.component.html',
  styleUrls: ['./integrity-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntegrityDisplayComponent implements OnInit {

  public record: any;

  public subheaderActions = {
    buttons: [],
    actions: [
      { id: 'downloadAction', icon: 'bars', text: 'Download' }
    ]
  };

  constructor(private location: Location, private route: ActivatedRoute, private integrityService: IntegrityService) { }

  ngOnInit() {  
    let id = this.route.snapshot.paramMap.get('id');
    this.record = this.integrityService.getRecord(id);
  }

  back() {
      this.location.back();
  }

  log(event) {

  }

}
