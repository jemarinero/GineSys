import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GineDeleteWarningComponent } from './gine-delete-warning.component';

describe('GineDeleteWarningComponent', () => {
  let component: GineDeleteWarningComponent;
  let fixture: ComponentFixture<GineDeleteWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GineDeleteWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GineDeleteWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
