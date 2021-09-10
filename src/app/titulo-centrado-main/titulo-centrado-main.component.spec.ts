import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloCentradoMainComponent } from './titulo-centrado-main.component';

describe('TituloCentradoMainComponent', () => {
  let component: TituloCentradoMainComponent;
  let fixture: ComponentFixture<TituloCentradoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloCentradoMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloCentradoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
