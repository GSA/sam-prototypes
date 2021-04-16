import { Directionality } from "@angular/cdk/bidi";
import { CdkStepper, StepperSelectionEvent } from "@angular/cdk/stepper";
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
  Output,
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
  @Input() hideSidePannel: boolean = false;
  
  constructor(dir: Directionality, cdr: ChangeDetectorRef) {
    super(dir, cdr);
  }

  isNextButtonHidden() {
    return !(this.steps.length === this.selectedIndex + 1);
  }
  isPreviousButtonHidden() {
    return this.selectedIndex !== 0;
  }
  onClick(selectedIndex: number): void {
    const selectionChange = new StepperSelectionEvent()
    selectionChange.previouslySelectedIndex = this.selectedIndex;
    selectionChange.previouslySelectedStep = this.steps.find((item, index) => index === this.selectedIndex);
    selectionChange.selectedIndex = selectedIndex;
    selectionChange.selectedStep = this.steps.find((item, index) => index === selectedIndex);

    this.selectedIndex = selectedIndex;
    this.selectionChange.emit(selectionChange);
  }
}
