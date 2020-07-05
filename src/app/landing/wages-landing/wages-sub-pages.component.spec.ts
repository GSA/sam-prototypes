import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WagesSubPagesComponent } from './wages-sub-pages.component';

describe('WagesSubPagesComponent', () => {
  let component: WagesSubPagesComponent;
  let fixture: ComponentFixture<WagesSubPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WagesSubPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WagesSubPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
