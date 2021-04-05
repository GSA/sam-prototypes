import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-review-submit',
  templateUrl: './review-submit.component.html',
  styleUrls: ['./review-submit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewSubmitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
