import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamFooterComponent } from './sam-footer.component';

describe('SamFooterComponent', () => {
  let component: SamFooterComponent;
  let fixture: ComponentFixture<SamFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
