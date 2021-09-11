import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosMainComponent } from './comentarios-main.component';

describe('ComentariosMainComponent', () => {
  let component: ComentariosMainComponent;
  let fixture: ComponentFixture<ComentariosMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentariosMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariosMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
