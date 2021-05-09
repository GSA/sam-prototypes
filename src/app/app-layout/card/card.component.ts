import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewEncapsulation,
} from "@angular/core";
import { expansionIndicatorRotate } from "../animations/animate-animation";

// Animations

/**
 * This Card component should be used as a base under the Design System.
 */
@Component({
  selector: "sds-expandable-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
  animations: [expansionIndicatorRotate],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  /**
   * This exposes the "one-roof-button" classname to external components to easily access the host component
   */
  @HostBinding("class.one-roof-card") hostClass = true;

  /**
   * The id for the underlying "mat-card" component, which is also used as a prefix for the
   * id of each section within the card.
   */
  @Input() id: string;

  /**
   * The overall title of the underlying "mat-card" component.
   */
  @Input() title: string;

  /**
   * Used to toggle the "mf-card-content" section. Toggled via clicking the expansion indicator,
   * but can be manually toggled as well.
   */
  @Input() showContent = true;

  /**
   * Used to manually toggle the "mf-card-footer" section.
   */
  @Input() showFooter = false;

  /**
   * Defines whether the dividers should be displayed between each visible section.
   */
  @Input() displayWithDividers = false;

  /**
   * Defines whether the "mat-card-content" section is capable of being expanded/collapsed.
   */
  @Input() isExpandable = false;

  /**
   * Controls whether the expansion indicator is disabled.
   */
  @Input() expansionIndicatorDisabled = false;

  /**
   * Emits an event whenever the Card's expansion indicator is clicked.
   */
  @Output()
  contentToggled: EventEmitter<CardToggleContentEvent> = new EventEmitter();

  // ------------------------------ Init ------------------------------

  constructor() {}

  // ------------------------------ Handle Expansion ------------------------------

  /**
   * Handles toggling the display of the "mf-card-content" section.
   * Due to OnPush ChangeDetection, this creates a new object reference to be emitted,
   * which consists of the "id" and "isExpanded" properties.
   */
  public toggleContent(): void {
    this.showContent = !this.showContent;

    const toggleEvent: CardToggleContentEvent = {
      id: this.id,
      isExpanded: this.showContent,
    };
    this.contentToggled.emit(toggleEvent);
  }

  // ------------------------------------------------------------
}

export interface CardToggleContentEvent {
  id: string;
  isExpanded: boolean;
}
