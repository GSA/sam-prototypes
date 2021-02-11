import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchSaveComponent } from './search-save.component';

describe('SearchSaveComponent', () => {
  let component: SearchSaveComponent;
  let fixture: ComponentFixture<SearchSaveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
