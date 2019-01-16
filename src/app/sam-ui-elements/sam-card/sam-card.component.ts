import { Component, Input } from '@angular/core';

@Component({
  selector: 'sam-card',
  templateUrl: './sam-card.component.html',
  styleUrls: ['./_styles.scss']
})
export class SamCardComponent {
	@Input() raised: boolean;
}