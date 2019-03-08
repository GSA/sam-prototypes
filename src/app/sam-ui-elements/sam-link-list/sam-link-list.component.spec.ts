import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamLinkListComponent } from './sam-link-list.component';

describe('SamLinkListComponent', () => {
  let component: SamLinkListComponent;
  let fixture: ComponentFixture<SamLinkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamLinkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamLinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
