import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoRegistersComponent } from './who-registers.component';

describe('WhoRegistersComponent', () => {
  let component: WhoRegistersComponent;
  let fixture: ComponentFixture<WhoRegistersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoRegistersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoRegistersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
