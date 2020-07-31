import { TestBed } from '@angular/core/testing';

import { EvaluacionServicioService } from './evaluacion-servicio.service';

describe('EvaluacionServicioService', () => {
  let service: EvaluacionServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvaluacionServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
