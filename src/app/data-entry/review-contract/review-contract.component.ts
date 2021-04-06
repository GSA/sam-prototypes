import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-review-contract",
  templateUrl: "./review-contract.component.html",
  styleUrls: ["./review-contract.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewContractComponent {
  itemsDefault = [
    { title: "First", id: 1 },
    { title: "Second", id: 2 },
    { title: "Third", id: 3 },
    { title: "Fourth", id: 4 },
    { title: "Fifth", id: 5, hasNewerData: true },
  ];

  items = this.itemsDefault;
}
