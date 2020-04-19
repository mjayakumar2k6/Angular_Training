import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfngSwitchComponent } from './ng-ifng-switch.component';

describe('NgIfngSwitchComponent', () => {
  let component: NgIfngSwitchComponent;
  let fixture: ComponentFixture<NgIfngSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfngSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfngSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
