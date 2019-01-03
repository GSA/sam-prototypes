import { Injectable } from '@angular/core';
import { ListModel, SearchModels } from './search-service.config';

@Injectable({
  providedIn: 'root'
})
export class SamSearchService {

  data: ListModel;
  private searchModels: Map<string, ListModel>;

  constructor() {
    this.searchModels = SearchModels;
  }

  setDomain(domain: string) {
    this.data = this.searchModels.get(domain);
  }
}
