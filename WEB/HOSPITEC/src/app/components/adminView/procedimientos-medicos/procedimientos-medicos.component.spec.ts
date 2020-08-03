import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedimientosMedicosComponent } from './procedimientos-medicos.component';

describe('ProcedimientosMedicosComponent', () => {
  let component: ProcedimientosMedicosComponent;
  let fixture: ComponentFixture<ProcedimientosMedicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedimientosMedicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedimientosMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
