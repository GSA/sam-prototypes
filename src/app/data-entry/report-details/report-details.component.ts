import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";

@Component({
  selector: "app-review-details",
  templateUrl: "./report-details.component.html",
  styleUrls: ["./report-details.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportDetailsComponent {
  constructor() {}
  @Input() detailsForm = new FormGroup({});
  @Input() detailsFormModel = {};
  @Input() detailsFormOptions: FormlyFormOptions = {};
  @Input() detailsFormFields: FormlyFieldConfig[] = [];
}
