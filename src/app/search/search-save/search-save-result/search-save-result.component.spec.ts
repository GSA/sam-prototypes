import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchSaveResultComponent } from './search-save-result.component';

describe('SearchSaveResultComponent', () => {
  let component: SearchSaveResultComponent;
  let fixture: ComponentFixture<SearchSaveResultComponent>;

  beforeEach(waitForAsync(() => {
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
