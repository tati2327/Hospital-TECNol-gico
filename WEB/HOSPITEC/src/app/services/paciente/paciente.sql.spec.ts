import { TestBed } from '@angular/core/testing';

import { PacienteSqlService } from './pacienteaql.service';

describe('PacienteSqlService', () => {
  let service: PacienteSqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacienteSqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
