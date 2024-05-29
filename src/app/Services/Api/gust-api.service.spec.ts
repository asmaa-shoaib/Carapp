import { TestBed } from '@angular/core/testing';

import { GustApiService } from './gust-api.service';

describe('GustApiService', () => {
  let service: GustApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GustApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
