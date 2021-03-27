import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IAddress } from '../../../services/location-service/location.service';

@Component({
  selector: 'app-entity-core-data',
  templateUrl: './entity-core-data.component.html',
  styleUrls: ['../../../components/display/display.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntityCoreDataComponent implements OnInit {

  address1:IAddress = {
      street1: '1101 Federal Street',
	  street2: 'Suite 100',
	  city: 'Salem',
	  state: 'Massachussetts',
	  zipcode: '01970-3874',
	  country: 'United States'
  };

  address2:IAddress = {
      street1: '1200 Main Street',
	  street2: null,
	  city: 'Salem',
	  state: 'Massachussetts',
	  zipcode: '01970-1913',
	  country: 'United States'
  };

  address3:IAddress = {
      street1: '1101 Federal Street',
	  street2: 'Suite 100',
	  city: 'Salem',
	  state: 'Massachussetts',
	  zipcode: '01970-3874',
	  country: 'United States'
  };


  constructor() { }

  ngOnInit() {
  }

}
