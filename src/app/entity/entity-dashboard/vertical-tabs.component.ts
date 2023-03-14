import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: `vertical-tab`,
  template: `<div
  [attr.aria-hidden]="!selected"
  [attr.id]="id"
  role="tabpanel"
  [ngClass]="{ 'display-none': !selected, 'display-block': selected }">
  <ng-content></ng-content>
</div>`
})
export class VerticalTabComponent {
  /**
   * The associated id of this tab panel
   */
  @Input() id: string;

  /**
   * True if panel is currently selected.
   * Only one tabpanel should be selected at a time
   */
  @Input() selected: boolean;

  /**
   * Header content for the tab panel. May be a string or a template
   */
  @Input() tabHeader: string | TemplateRef<any>;

  /**
   * Aria label for tab header
   */
  @Input() ariaLabel: string;

  /**
   * Whether this tab panel is disabled for selection
   */
  @Input() disabled: boolean;
}

/** CONSTANTS
 * Adding in the constant values for keycodes
 * to handle onKeyDown events
 */
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;

@Component({
  selector: `vertical-tabs`,
  templateUrl: `./vertical-tabs.component.html`,
})
export class VerticalTabsComponent implements OnInit, OnChanges, AfterContentInit {
  /**
   * Currently selected tab for display.
   */
  @Input()
  selectedTab: VerticalTabComponent;

  /**
   * Enable automatic activation for tabs when cycling through tabs using
   * Left or Right arrow keys. Automatic activated tabs will automatically
   * be selected on focus as user presses left or right arrow to move
   * through each tab. By default, tabs will need to be manually selected
   * when using keyboard only by pressing either Enter or Space to select
   * the focused tab
   */
  @Input() automaticActivation: boolean = false;

  /**
   * CSS styling class for tabs
   */
  @Input() tabClass: string = 'sds-tabs--default';

  @Input() interceptTabChange: boolean = false;

  /**
   * Emits an event whenever a tab is selected by the user containing the selected
   * VerticalTabComponent. Please note that because this output contains `Change` suffix
   * to the `tabSelected` input, users can 2-way bind to the `selectedTab` input
   */
  @Output()
  selectedTabChange: EventEmitter<VerticalTabComponent> = new EventEmitter<VerticalTabComponent>();

  @Output()
  preTabChange: EventEmitter<VerticalTabComponent> = new EventEmitter<VerticalTabComponent>();

  @ContentChildren(VerticalTabComponent) tabPanels: QueryList<VerticalTabComponent>;

  /**
   * Currently focused tab - can differ from selected tab when tab panels are manually activated
   */
  private focusedTab: VerticalTabComponent;

  /**
   * Assigns selected tab value was given. Otherwise, the first
   * tab panel in the list will be selected after content has initialized.
   */
  ngOnInit() {
    if (this.selectedTab) {
      this.selectedTab.selected = true;
      this.focusedTab = this.selectedTab;
    }
  }

  /**
   * Listens for programmatic change to selected tab. When a tab is changed
   * programmatically, we must disable previously selected tab, set selected
   * property of the new tab to true, and adjust bookkeeping values.
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedTab && changes.selectedTab.currentValue) {
      this.tabPanels.forEach((tab) => (tab.selected = false));
      changes.selectedTab.currentValue.selected = true;
      this.focusedTab = this.selectedTab;
    }
  }

  /**
   * If user has not given any tabs to select initially,
   * select the first tab panel.
   */
  ngAfterContentInit() {
    if (!this.selectedTab) {
      this.tabPanels.first.selected = true;
      this.selectedTab = this.tabPanels.first;
      this.focusedTab = this.selectedTab;
    }
  }

  onTabClicked(clickEvent: MouseEvent, tabPanel: VerticalTabComponent) {
    this.changeSelectedTabPanel(tabPanel);
  }

  /**
   * Looks for Left and Right arrow presses and moves selected tab accordingly.
   * @param $event - Keyboard Event
   */
  onKeyDown($event) {
    console.log($event);
    const tabPanelArray = this.tabPanels.toArray();
    let selectedTabIndex = tabPanelArray.findIndex((tabPanel) => tabPanel === this.focusedTab);

    switch ($event.keyCode) {
      case LEFT_ARROW:
        selectedTabIndex = this.getNextTabLeft(tabPanelArray, selectedTabIndex);
        break;
      case RIGHT_ARROW:
        selectedTabIndex = this.getNextTabRight(tabPanelArray, selectedTabIndex);
        break;
    }

    // Move focus to newly selected panel
    $event.target.parentElement.children[selectedTabIndex].focus();
    this.focusedTab = tabPanelArray[selectedTabIndex];

    if (this.automaticActivation) {
      this.changeSelectedTabPanel(this.focusedTab);
    }
  }

  isObj(obj: any) {
    if (typeof obj === 'object' && (obj as TemplateRef<any>).elementRef) {
      return true;
    } else if (typeof obj === 'string') {
      return false;
    } else {
      throw new Error('Tab header must be either a string or a template reference');
    }
  }

  /**
   * Internal method to change currently selected tab panel and display another panel
   * to the user. External components should not use this method, but rather
   * two-way bind the selectedTab input and modify that value.
   * @param newTabPanel
   */
  private changeSelectedTabPanel(newTabPanel: VerticalTabComponent) {
    this.preTabChange.emit(newTabPanel);
    if (this.interceptTabChange) {
      return;
    }
    this.selectedTab.selected = false;
    newTabPanel.selected = true;
    this.selectedTab = newTabPanel;
    this.focusedTab = newTabPanel;
    this.selectedTabChange.emit(this.selectedTab);
  }

  /**
   * Gets next tab panel to the left of currently selected panel when Left Arrow is pressed.
   * Skips disabled panels until it finds next left panel that is not disabled
   * @param tabPanels - List of VerticalTabComponents in the tab group
   * @param startIndex - Current index of focused tab panel
   */
  private getNextTabLeft(tabPanels: VerticalTabComponent[], startIndex: number) {
    for (let i = 0; i < tabPanels.length; i++) {
      startIndex = startIndex == 0 ? tabPanels.length - 1 : (startIndex - 1) % tabPanels.length;
      if (!tabPanels[startIndex].disabled) {
        return startIndex;
      }
    }
  }

  /**
   * Gets next tab panel to the right of currently selected panel when Right Arrow is pressed
   * Skips disabled panels until it finds next right panel that is not disabled
   * @param tabPanels - List of VerticalTabComponents in the tab group
   * @param startIndex - Current index of focused tab panel
   */
  private getNextTabRight(tabPanels: VerticalTabComponent[], startIndex: number) {
    for (let i = 0; i < tabPanels.length; i++) {
      startIndex = (startIndex + 1) % this.tabPanels.length;
      if (!tabPanels[startIndex].disabled) {
        return startIndex;
      }
    }
  }
}
