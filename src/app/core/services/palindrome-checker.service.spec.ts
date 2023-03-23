import { TestBed } from '@angular/core/testing';

import { PalindromeCheckerService } from './palindrome-checker.service';

describe('PalindromeCheckerService', () => {
  let service: PalindromeCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PalindromeCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
