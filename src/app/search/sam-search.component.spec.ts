import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamSearchComponent } from './sam-search.component';

describe('SamSearchComponent', () => {
  let component: SamSearchComponent;
  let fixture: ComponentFixture<SamSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
