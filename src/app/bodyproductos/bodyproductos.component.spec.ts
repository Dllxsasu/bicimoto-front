import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyproductosComponent } from './bodyproductos.component';

describe('BodyproductosComponent', () => {
  let component: BodyproductosComponent;
  let fixture: ComponentFixture<BodyproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyproductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
