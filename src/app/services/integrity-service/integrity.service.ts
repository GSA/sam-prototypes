import { Injectable } from '@angular/core';
import { IntegrityServiceModule } from './integrity-service.module';
import { integrityData } from './integrity.data';

@Injectable({
  providedIn: IntegrityServiceModule
})
export class IntegrityService {

  data: any[];

  constructor() { 
  	this.initData(integrityData);
  }

  public getRecord(ID): any {
  	for(let i=0; i<this.data.length; i++) {
  	  if(this.data[i].id == ID) {
  	      return this.data[i];
  	  }
  	}
  	return null;
  }

  private initData(data: any[]) {
    for(let i=0; i<data.length; i++) {
        data[i]._type = "integrity";
        data[i].id = i;
    }
    this.data = data;
  }
}
