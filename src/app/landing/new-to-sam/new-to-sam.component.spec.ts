import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewToSamComponent } from './new-to-sam.component';

describe('NewToSamComponent', () => {
  let component: NewToSamComponent;
  let fixture: ComponentFixture<NewToSamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewToSamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewToSamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
