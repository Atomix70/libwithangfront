import { TestBed } from '@angular/core/testing';

import { SingleauthService } from './singleauth.service';

describe('SingleauthService', () => {
  let service: SingleauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
