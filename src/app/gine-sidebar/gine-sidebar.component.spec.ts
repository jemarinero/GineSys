import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GineSidebarComponent } from './gine-sidebar.component';

describe('GineSidebarComponent', () => {
  let component: GineSidebarComponent;
  let fixture: ComponentFixture<GineSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GineSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GineSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
