import { Directionality } from "@angular/cdk/bidi";
import { CdkStepper } from "@angular/cdk/stepper";
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
} from "@angular/core";

@Component({
  selector: "app-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.scss"],
  //changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: CdkStepper, useExisting: StepperComponent }],
})
export class StepperComponent extends CdkStepper {
  ngOnInit(): void {}

  constructor(dir: Directionality, cdr: ChangeDetectorRef) {
    super(dir, cdr);
  }

  isNextButtonHidden() {
    return !(this.steps.length === this.selectedIndex + 1);
  }
  isPreviousButtonHidden() {
    return this.steps.length === this.selectedIndex - 1;
  }
  onClick(index: number): void {
    this.selectedIndex = index;
  }
}
