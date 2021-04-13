import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { Observable } from "rxjs";
import { EntityReportingService } from "src/app/services/entity-reporting-service/entity-reporting.service";
export interface SdsContractServiceInterface {
  /**
   *
   * @param searchValue
   */
  getSortedFilteredData(searchParameters: any): any;
}

@Component({
  selector: "app-review-contract",
  templateUrl: "./review-contract.component.html",
  styleUrls: ["./review-contract.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewContractComponent {
  @Input() items: any = [];
  @Input() service: SdsContractServiceInterface;
  results = [];
  constructor(private entityReportingService: EntityReportingService) {
    const searchParameters: any = {
      page: {
        pageNumber: 0,
        pageSize: 25,
        totalPages: 4,
      },
      sortField: "",
      filter: {},
    };
    this.results = this.entityReportingService.getSortedFilteredData(
      searchParameters
    );
    console.log(this.results, "test results");
  }
}
