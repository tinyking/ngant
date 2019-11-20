import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleForm2Component } from './example-form2.component';

describe('ExampleForm2Component', () => {
  let component: ExampleForm2Component;
  let fixture: ComponentFixture<ExampleForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
