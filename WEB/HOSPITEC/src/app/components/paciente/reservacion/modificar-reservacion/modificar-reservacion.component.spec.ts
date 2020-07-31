import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarReservacionComponent } from './modificar-reservacion.component';

describe('ModificarReservacionComponent', () => {
  let component: ModificarReservacionComponent;
  let fixture: ComponentFixture<ModificarReservacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarReservacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarReservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
