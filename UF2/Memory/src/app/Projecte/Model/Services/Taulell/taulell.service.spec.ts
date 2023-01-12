import { TestBed } from '@angular/core/testing';

import { TaulellService } from './taulell.service';

describe('TaulellService', () => {
  let service: TaulellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaulellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
