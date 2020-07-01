import { TestBed } from '@angular/core/testing';

import { CharleneService } from './charlene.service';

describe('CharleneService', () => {
  let service: CharleneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharleneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
