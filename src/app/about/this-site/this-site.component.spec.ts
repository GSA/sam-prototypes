import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisSiteComponent } from './this-site.component';

describe('ThisSiteComponent', () => {
  let component: ThisSiteComponent;
  let fixture: ComponentFixture<ThisSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThisSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
