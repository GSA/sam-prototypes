import { Component, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
  selector: "app-review-contract",
  templateUrl: "./review-contract.component.html",
  styleUrls: ["./review-contract.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewContractComponent {
  @Input() items: any = [];
}
