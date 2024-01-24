import { TestBed } from '@angular/core/testing';

import { EmployeDetailResolver } from './employe-detail.resolver';

describe('EmployeDetailResolver', () => {
  let resolver: EmployeDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EmployeDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
