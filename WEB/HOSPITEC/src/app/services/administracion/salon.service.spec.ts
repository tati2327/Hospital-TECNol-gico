import { TestBed } from '@angular/core/testing';

import { SalonService } from './salon.service';

describe('SalonServiceService', () => {
  let service: SalonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
