import { Injectable } from '@angular/core';
import { SearchServiceModule } from './service.module';

@Injectable({
  providedIn: SearchServiceModule
})
export class SamSearchService {

  showNav: boolean = true;

  constructor() {

  }

}
