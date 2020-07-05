import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WagesSubMenuComponent } from './wages-sub-menu.component';

describe('WagesSubMenuComponent', () => {
  let component: WagesSubMenuComponent;
  let fixture: ComponentFixture<WagesSubMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WagesSubMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WagesSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
