import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitiesWsItemComponent } from './opportunities-ws-item.component';

describe('OpportunitiesWsItemComponent', () => {
  let component: OpportunitiesWsItemComponent;
  let fixture: ComponentFixture<OpportunitiesWsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunitiesWsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunitiesWsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
