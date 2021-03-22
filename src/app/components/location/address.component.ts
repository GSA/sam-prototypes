import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IAddress } from '../../services/location-service/location.service';

@Component({
  selector: 'address',
  template: `
	<div class="sds-field sds-field--stacked sds-field--small">
        <div class="sds-field__name">{{title}}</div>
        <div class="sds-field__value sds-field__value--small text-semibold">
            <div>{{addressLine1}}</div>
            <div>{{addressLine2}}</div>
        </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressComponent implements OnInit {

  @Input() title: string;
  @Input() address: IAddress;

  addressLine1: string;
  addressLine2: string

  constructor() { }

  ngOnInit(): void {
      if(this.address) {
          if(this.address.street1) {
          	this.addressLine1 = this.address.street1.toUpperCase();
          }
          if(this.address.street2) {
            if(this.addressLine1) {
            	this.addressLine1 = this.addressLine1.concat(', ');
            }
          	this.addressLine1 = this.addressLine1.concat(this.address.street2.toUpperCase());
          }

          if(this.address.city) {
          	this.addressLine2 = this.address.city;
          }
          if(this.address.state) {
            if(this.addressLine2) {
                this.addressLine2 = this.addressLine2.concat(', ');
            }
            this.addressLine2 = this.addressLine2.concat(this.address.state.toUpperCase());
          }
          if(this.address.zipcode) {
            if(this.addressLine2) {
                this.addressLine2 = this.addressLine2.concat(' ');
            }
            this.addressLine2 = this.addressLine2.concat(this.address.zipcode);          
          }
          if(this.address.country) {
               if(this.addressLine2) {
               this.addressLine2 = this.addressLine2.concat(' ');
            }
            this.addressLine2 = this.addressLine2.concat(this.address.country.toUpperCase());
          }
      }
  }

}
