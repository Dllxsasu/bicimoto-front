import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodynosotrosComponent } from './bodynosotros.component';

describe('BodynosotrosComponent', () => {
  let component: BodynosotrosComponent;
  let fixture: ComponentFixture<BodynosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodynosotrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodynosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
