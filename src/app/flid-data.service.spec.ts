import { TestBed } from '@angular/core/testing';

import { FlidDataService } from './flid-data.service';

describe('FlidDataService', () => {
  let service: FlidDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlidDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
