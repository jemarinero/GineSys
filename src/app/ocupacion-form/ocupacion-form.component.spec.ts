import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcupacionFormComponent } from './ocupacion-form.component';

describe('OcupacionFormComponent', () => {
  let component: OcupacionFormComponent;
  let fixture: ComponentFixture<OcupacionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcupacionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcupacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
