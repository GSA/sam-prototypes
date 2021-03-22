import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IAddress } from '../../services/location-service/location.service';

@Component({
  selector: 'poc-card',
  template: `
    <div class="sds-card margin-bottom-1">
        <div class="sds-card__header sds-card__header--left">
            <div class="sds-card__title ">{{name}} <span *ngIf="isPrimary" class="sds-tag sds-tag--outline">Primary</span></div>
        </div>
        <div class="sds-card__body">
          	<div class="display-row">
          		<div class="display-col">
	      		  <display-field label="Title">
	      		  	{{title}}
	      		  </display-field>
	      		</div>
	      		<div class="display-col">
	      		  <display-field label="Email Address">
	      		  	{{email}}
	      		  </display-field>
	      		</div>
	      		<div class="display-col">
	      		  <display-field label="Phone Number">
	      		  	{{phone}}
	      		  </display-field>
	      		</div>
	      		<div class="display-col">
	      		  <address title="Address" [address]="address"></address>
	      		</div>
          </div>
        </div>
    </div>
  `,
  styleUrls: ['./display.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PocCardComponent implements OnInit {

  @Input() name:string;
  @Input() email:string;
  @Input() title:string;
  @Input() phone:string;
  @Input() address:IAddress;
  @Input() isPrimary: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
