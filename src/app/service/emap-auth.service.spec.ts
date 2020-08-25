import { TestBed } from '@angular/core/testing';

import { EmapAuthService } from './emap-auth.service';

describe('EmapAuthService', () => {
  let service: EmapAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmapAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
