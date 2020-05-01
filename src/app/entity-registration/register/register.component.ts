import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {

  constructor(public locationStrategy: LocationStrategy) { }

  ngOnInit() {
  }

}
