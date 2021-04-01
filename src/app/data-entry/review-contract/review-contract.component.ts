import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-review-contract",
  templateUrl: "./review-contract.component.html",
  styleUrls: ["./review-contract.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewContractComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
