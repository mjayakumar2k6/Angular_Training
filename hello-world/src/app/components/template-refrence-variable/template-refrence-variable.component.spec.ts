import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefrenceVariableComponent } from './template-refrence-variable.component';

describe('TemplateRefrenceVariableComponent', () => {
  let component: TemplateRefrenceVariableComponent;
  let fixture: ComponentFixture<TemplateRefrenceVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateRefrenceVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRefrenceVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
