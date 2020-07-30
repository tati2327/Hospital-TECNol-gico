import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionServicioComponent } from './evaluacion-servicio.component';

describe('EvaluacionServicioComponent', () => {
  let component: EvaluacionServicioComponent;
  let fixture: ComponentFixture<EvaluacionServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluacionServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
