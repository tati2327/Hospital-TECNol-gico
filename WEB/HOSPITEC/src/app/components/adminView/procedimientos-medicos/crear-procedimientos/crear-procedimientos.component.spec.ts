import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProcedimientosComponent } from './crear-procedimientos.component';

describe('CrearProcedimientosComponent', () => {
  let component: CrearProcedimientosComponent;
  let fixture: ComponentFixture<CrearProcedimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearProcedimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearProcedimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
