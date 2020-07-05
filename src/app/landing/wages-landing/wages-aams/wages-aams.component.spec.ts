import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WagesAamsComponent } from './wages-aams.component';

describe('WagesAamsComponent', () => {
  let component: WagesAamsComponent;
  let fixture: ComponentFixture<WagesAamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WagesAamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WagesAamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
