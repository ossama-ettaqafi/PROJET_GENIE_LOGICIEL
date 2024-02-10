import { TestBed } from '@angular/core/testing';

import { LongService } from './long.service';

describe('LongService', () => {
  let service: LongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
