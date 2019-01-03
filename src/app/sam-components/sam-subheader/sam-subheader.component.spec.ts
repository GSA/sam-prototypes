import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamSubheaderComponent } from './sam-subheader.component';

describe('SamSubheaderComponent', () => {
  let component: SamSubheaderComponent;
  let fixture: ComponentFixture<SamSubheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamSubheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamSubheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
