import { TestBed } from '@angular/core/testing';

import { DaysService } from './days-service';

describe('DaysService', () => {
  let service: DaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have method getDays', () => {
    expect(service.getDays).toBeDefined();
  });

  describe('getDays()', () => {
    it('should return array with length 29', () => {
      const result = service.getDays(2);
      expect(result.length).toEqual(29);
    });

    it('should return array with length 31', () => {
      const months = [1, 3, 5, 7, 8, 10, 12];

      for (const month of months) {
        const result = service.getDays(month);
        expect(result.length).toEqual(31);
      }
    });

    it('should return array with length 30', () => {
      const months = [4, 6, 9, 11];

      for ( const month of months) {
        const result = service.getDays(month);
        expect(result.length).toEqual(30);
      }
    });
  });
});
