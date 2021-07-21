import { Injectable } from "@angular/core";
import { SearchParameters } from "@gsa-sam/layouts";
import { AbstractSearchableService } from "../abstract-searchable-service/abstract-searchable.service";

import { EntityReportingServiceModule } from "./entity-reporting-service.module";

import { contracts } from "./awards.data";

@Injectable({
  providedIn: EntityReportingServiceModule,
})
export class EntityReportingService extends AbstractSearchableService {
  private data: any[] = contracts;

  constructor() {
    super();
  }

  getSortedFilteredData(search: SearchParameters): any[] {
    return this.data;
  }

  getFilteredDataById(id) {
    let filteredData = this.data.find((item) => item._id === id);
    return filteredData;
  }
}
