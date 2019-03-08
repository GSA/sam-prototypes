import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamLinkComponent } from './sam-link.component';

describe('SamLinkComponent', () => {
  let component: SamLinkComponent;
  let fixture: ComponentFixture<SamLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
