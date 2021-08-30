import { TestBed } from '@angular/core/testing';

import { IdadeService } from './idade.service';

describe('IdadeService', () => {
  let service: IdadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
