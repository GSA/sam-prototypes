import { Component, Input } from "@angular/core";

@Component({
  selector: "review-contract-item",
  templateUrl: "./child-item.component.html",
})
export class ReviewListItemChildSampleComponent {
  @Input() item: any;
}
