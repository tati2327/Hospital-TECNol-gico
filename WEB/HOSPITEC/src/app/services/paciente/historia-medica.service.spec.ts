import { TestBed } from '@angular/core/testing';

import { HisotriaMedicaService } from './historia-medica.service';

describe('HisotriaMedica', () => {
  let service: HistoriaMedicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriaMedicaSevice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
