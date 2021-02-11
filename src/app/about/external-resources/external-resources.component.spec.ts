import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExternalResourcesComponent } from './external-resources.component';

describe('ExternalResourcesComponent', () => {
  let component: ExternalResourcesComponent;
  let fixture: ComponentFixture<ExternalResourcesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
