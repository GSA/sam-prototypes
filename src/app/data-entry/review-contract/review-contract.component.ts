import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-review-contract",
  templateUrl: "./review-contract.component.html",
  styleUrls: ["./review-contract.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewContractComponent {
  @Input()
  isLinear = true;

  @Input()
  isEditable = true;

  frmValues: object = {};
  frmStepper: FormGroup;

  get formArray(): AbstractControl {
    return this.frmStepper.get("steps");
  }
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.frmStepper = this.fb.group({
      steps: this.fb.array([
        this.fb.group({
          firstName: [null],
          lastName: [null],
          phone: [null],
          email: [
            "",
            Validators.compose([Validators.required, Validators.email]),
          ],
        }),
      ]),
    });
  }

  submit(): void {
    console.log(this.frmStepper.value);
    this.frmValues = this.frmStepper.value;
  }
}
