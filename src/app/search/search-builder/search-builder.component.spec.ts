import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBuilderComponent } from './search-builder.component';

describe('SearchBuilderComponent', () => {
  let component: SearchBuilderComponent;
  let fixture: ComponentFixture<SearchBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
