import { TestBed } from '@angular/core/testing';

import { FauxScopeService } from './faux-scope.service';

describe('FauxScopeService', () => {
  let service: FauxScopeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FauxScopeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have method GetFauxScopes', () => {
    expect(service.getFauxScopes).toBeDefined();
  });

  describe('getFauxScopes()', () => {
    it('should return array of length 2', () => {
      const result = service.getFauxScopes(new Date());

      expect(result.length).toEqual(2);
    });
  });
});
