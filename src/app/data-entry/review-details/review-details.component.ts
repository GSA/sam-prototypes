import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-review-details",
  templateUrl: "./review-details.component.html",
  styleUrls: ["./review-details.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
