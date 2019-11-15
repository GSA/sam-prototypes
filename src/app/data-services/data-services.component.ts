import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SamModelService } from '../model/sam-model.service';
import { SdsDialogService, SDS_DIALOG_DATA } from '@gsa-sam/components';

/**
 * ALERTS
 * ================================================
 */
@Component({
  selector: 'app-dialog-sample-alert',
  templateUrl: './alert.html'
})
export class AlertComponent {
  constructor(@Inject(SDS_DIALOG_DATA) public data) {}
}

/**
 * OFFICIAL
 * ================================================
 */
@Component({
  selector: 'app-dialog-sample-official',
  templateUrl: './official.html'
})
export class OfficialComponent {}

/**
 * MAIN
 * ================================================
 */
@Component({
  selector: 'app-data-services',
  templateUrl: './data-services.component.html',
  styleUrls: ['./_styles.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DataServicesComponent implements OnInit {
  domain: string;

  public subheader = {
    buttons: [],
    actions: [
      { id: 'DownloadBtn', icon: 'bars', text: 'Download' }
    ]
  };

  constructor(
    private route: ActivatedRoute,
    public model: SamModelService,
    public dialog: SdsDialogService
  ) {}

  ngOnInit() {
    this.domain = this.route.snapshot.queryParamMap.get('domain');
    this.route.queryParamMap.subscribe(queryParams => {
      this.domain = queryParams.get('domain');
      if (!this.domain) {
        this.domain = 'all';
      }
    });
  }

  /**
   * Example inplementation to open a Dialog Alert
   * @param title - title of the alert
   * @param content - alert content
   * @param alert - error | warning | info
   * @param size - small | medium | large | number(ex. 300px)
   * @example
   * // Opens alert with a medium width dialog container (730px)
   * openAlert('My title','My Content', 'warning', 'medium')
   * // Opens alert with a 300px width dialog container
   * openAlert('My title','My Content', 'warning', '300px')
   */
  openAlert(title, content, alert, size) {
    const dialogRef = this.dialog.open(AlertComponent, {
      alert,
      width: size,
      data: { title, content }
    });
  }

  openOfficial() {
    const dialogRef = this.dialog.open(OfficialComponent, {
      width: 'large'
    });
  }

  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }
}
