import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarProcedimientosComponent } from './modificar-procedimientos.component';

describe('ModificarProcedimientosComponent', () => {
  let component: ModificarProcedimientosComponent;
  let fixture: ComponentFixture<ModificarProcedimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarProcedimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarProcedimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
