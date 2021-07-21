import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'award-item',
  template: `
    <search-result [title]="model.identifiers[0].piid + ' (' + model.identifiers[0].modificationNumber + ')'">
		<div class="display-row">
			<div class="display-col">
				<display-field label="Awardee">{{model.vendor.name}}</display-field>
			</div>
			<div class="display-col">
				<display-field label="Unique Entity ID">{{model.vendor.dunsNumber}}</display-field>
			</div>
			<div class="display-col">
				<display-field label="Period of Performance Start Date">{{popStartDate() | date}}</display-field>
			</div>
			<div class="display-col">
				<display-field label="Obligated Amount">{{obligatedAmount()}}</display-field>
			</div>
		</div>
    </search-result>
  `,
  styleUrls: ['../../components/display/display.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AwardItemComponent implements OnInit {

  @Input() model: any;

  constructor() { }

  ngOnInit(): void {
  }

  popStartDate() {
      return new Date(this.model.contract.signedDate);
  }

  obligatedAmount() {
	  return this.model.contract.obligatedAmount.toLocaleString("en-US", {
		  style: "currency",
		  currency: "USD"
		});
  }

}
