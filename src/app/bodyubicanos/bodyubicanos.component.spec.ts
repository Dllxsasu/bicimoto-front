import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyubicanosComponent } from './bodyubicanos.component';

describe('BodyubicanosComponent', () => {
  let component: BodyubicanosComponent;
  let fixture: ComponentFixture<BodyubicanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyubicanosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyubicanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
