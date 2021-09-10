import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPanelonComponent } from './nav-panelon.component';

describe('NavPanelonComponent', () => {
  let component: NavPanelonComponent;
  let fixture: ComponentFixture<NavPanelonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavPanelonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPanelonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
