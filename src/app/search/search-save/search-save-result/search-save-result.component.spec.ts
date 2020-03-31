import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSaveResultComponent } from './search-save-result.component';

describe('SearchSaveResultComponent', () => {
  let component: SearchSaveResultComponent;
  let fixture: ComponentFixture<SearchSaveResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSaveResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSaveResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
