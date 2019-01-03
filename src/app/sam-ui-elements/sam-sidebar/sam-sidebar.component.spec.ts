import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamSidebarComponent } from './sam-sidebar.component';

describe('SamSidebarComponent', () => {
  let component: SamSidebarComponent;
  let fixture: ComponentFixture<SamSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
