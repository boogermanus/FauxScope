import { TestBed } from '@angular/core/testing';

import { DaysServiceService } from './days-service.service';

describe('DaysServiceService', () => {
  let service: DaysServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaysServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have method getDays', () => {
    expect(service.getDays).toBeDefined();
  });

  describe('getDays()', () => {
    it('should return 29 for 2', () => {
      expect(service.getDays(2)).toEqual(29);
    });

    it('should return 31 for 1,3,5,7,8,10,12', () => {
      const months = [1, 3, 5, 7, 8, 10, 12];

      for (const month of months) {
        expect(service.getDays(month)).toEqual(31);
      }
    });

    it('should return 30 for 4,6,9,11', () => {
      const months = [4, 6, 9, 11];

      for ( const month of months) {
        expect(service.getDays(month)).toEqual(30);
      }
    });
  });
});
