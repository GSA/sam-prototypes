import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IAddress } from '../../services/location-service/location.service';


@Component({
  selector: 'summary-addresses',
  template: `
  	<div class="sds-tile--outline padding-x-0 padding-y-2">
		<div class="grid-row grid-gap margin-0">
			<div class="grid-col-12 tablet:grid-col-6">
				<address title="Physical Address" [address]="physicalAddress"></address>
			</div>
			<div class="grid-col-12 margin-top-1 tablet:grid-col-6 tablet:margin-top-0">
				<address title="Mailing Address" [address]="mailingAddress"></address>
			</div>
		</div>
	</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryAddressesComponent implements OnInit {

  physicalAddress:IAddress = {
      street1: '1101 Federal Street',
	  street2: 'Suite 100',
	  city: 'Salem',
	  state: 'Massachussetts',
	  zipcode: '01970-3874',
	  country: 'United States'
  };

  mailingAddress:IAddress = {
      street1: '1200 Main Street',
	  street2: null,
	  city: 'Salem',
	  state: 'Massachussetts',
	  zipcode: '01970-1913',
	  country: 'United States'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
