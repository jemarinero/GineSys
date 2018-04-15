import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GineMenuComponent } from './gine-menu.component';

describe('GineMenuComponent', () => {
  let component: GineMenuComponent;
  let fixture: ComponentFixture<GineMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GineMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GineMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
