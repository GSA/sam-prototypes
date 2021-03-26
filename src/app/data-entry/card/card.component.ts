import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
  animations:[expansionIndicatorRotate],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
@HostBinding('')

  constructor() {}

  ngOnInit(): void {}
}
