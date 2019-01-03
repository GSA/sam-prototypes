import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamMegamenuComponent } from './sam-megamenu.component';

describe('SamMegamenuComponent', () => {
  let component: SamMegamenuComponent;
  let fixture: ComponentFixture<SamMegamenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamMegamenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamMegamenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
