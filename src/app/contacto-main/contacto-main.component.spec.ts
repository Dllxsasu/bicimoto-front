import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoMainComponent } from './contacto-main.component';

describe('ContactoMainComponent', () => {
  let component: ContactoMainComponent;
  let fixture: ComponentFixture<ContactoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
