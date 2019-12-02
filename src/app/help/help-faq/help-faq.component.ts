import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelpService } from '../service/help.service';
import { HelpData } from '../service/help.model';

@Component({
  selector: 'app-help-faq',
  templateUrl: './help-faq.component.html',
  styleUrls: ['./help-faq.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpFaqComponent implements OnInit {

  model: HelpData;

  public subheader = {
    buttons: [],
    actions: [
      { id: 'DownloadBtn', icon: 'bars', text: 'Download' }
    ]
  };

  constructor(private service: HelpService, private route: ActivatedRoute) { 
  }

  ngOnInit() {
      this.route.paramMap.subscribe(params => {
    	this.model = this.service.getById(params.get('id'));
    });
  }

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }

}
