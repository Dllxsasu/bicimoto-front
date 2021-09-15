import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagproductosComponent } from './pagproductos.component';

describe('PagproductosComponent', () => {
  let component: PagproductosComponent;
  let fixture: ComponentFixture<PagproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagproductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
