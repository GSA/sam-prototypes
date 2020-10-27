import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DataServicesComponent } from './data-services.component';

describe('DataServicesComponent', () => {
  let component: DataServicesComponent;
  let fixture: ComponentFixture<DataServicesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DataServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
