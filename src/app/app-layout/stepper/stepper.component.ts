import { Directionality } from "@angular/cdk/bidi";
import { CdkStepper, StepperSelectionEvent } from "@angular/cdk/stepper";
import { Location } from "@angular/common";

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
  @Input() hideSidePannel: boolean = false;
  @Input() stepInfoList: any[] = [];
  constructor(
    dir: Directionality,
    cdr: ChangeDetectorRef,
    private location: Location
  ) {
    super(dir, cdr);
  }

  isNextButtonHidden() {
    return !(this.steps.length === this.selectedIndex + 1);
  }
  isPreviousButtonHidden() {
    return this.selectedIndex !== 0;
  }
  onClick(selectedIndex: number): void {
    const selectionChange = new StepperSelectionEvent();
    selectionChange.previouslySelectedIndex = this.selectedIndex;
    selectionChange.previouslySelectedStep = this.steps.find(
      (item, index) => index === this.selectedIndex
    );
    selectionChange.selectedIndex = selectedIndex;
    selectionChange.selectedStep = this.steps.find(
      (item, index) => index === selectedIndex
    );

    this.selectedIndex = selectedIndex;
    this.selectionChange.emit(selectionChange);
  }
  getBacklabel(): string {
    return this.selectedIndex !== 0
      ? "Back to </br>" + this.stepInfoList[this.selectedIndex - 1].label
      : " Back ";
  }
  getNextlabel(): string {
    return !(this.steps.length === this.selectedIndex + 1)
      ? "Go to </br>" + this.stepInfoList[this.selectedIndex + 1].label
      : "Next";
  }

  closeback() {
    this.location.back();
  }
}
