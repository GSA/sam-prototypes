import { Component, ContentChild, EventEmitter, Input, Output, SimpleChanges, TemplateRef } from "@angular/core";
import { Page, SearchListConfiguration, SearchResult } from "@gsa-sam/layouts";

@Component({
  selector: `sam-search-content`,
  templateUrl: './search-content.component.html'
})
export class SearchContentComponent {
  @ContentChild('resultContent') resultContentTemplate: TemplateRef<any>;

    /**
   * Allow to insert a customized template for no results to use
   */
  @Input() customResultsTemplate: TemplateRef<any>;

  /**
   * configuration
   */
  @Input() configuration: SearchListConfiguration;

  @Input() searchResults: SearchResult;

  @Output() pageChange = new EventEmitter<Page>();

  @Output() sortFieldChange = new EventEmitter();


  /**
   * Total number of items
   */
  totalItems: number;

    /**
   * Default Page setttings
   */
  @Input()
  page = {
    pageNumber: 1,
    pageSize: 25,
    totalPages: 0,
    default: true,
  };

  /**
   * Id of the top pagination control
   */
  top = { id: 'topPagination' };

  /**
   * Id of the bottom pagination control
   */
  bottom = { id: 'bottomPagination' };

  /**
   * List of items to be displayed
   */
  items = [];

  /**
   * sort value
   */
  public sortField = '';

  /**
   * Value to track whether API call in progress for purpose of showing loading
   * template
   */
  @Input() loading = false;

  /**
   * Used in ngFor to create multiple copies of the same loading row.
   */
  loadingArray = Array(25);

  ngOnChanges(changes: SimpleChanges) {
    if (changes.configuration && changes.configuration.currentValue) {
      this.configuration = changes.configuration.currentValue;
      this.sortField = this.configuration.defaultSortValue;
    }

    if (changes.searchResults) {
      this.totalItems = this.searchResults.totalItems;
      this.items = this.searchResults.items;
    }
  }

  ngOnInit() {
    this.page.pageSize = this.configuration.pageSize;
    this.sortField = this.configuration.defaultSortValue;
  }

  onPageChange($event: Page) {
    this.pageChange.emit($event);
  }

  onSelectChange() {
    this.sortFieldChange.emit(this.sortField);
  }

}