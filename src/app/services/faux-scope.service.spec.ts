import { TestBed } from '@angular/core/testing';
import { SignConstants } from '../models/constants';
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

    describe('Astrological', () => {
      it('should return Aries start Astrological', () => {
        const result = service.getFauxScopes(new Date('03/21/01'))[SignConstants.Astrological];

        expect(result.sign).toEqual('Aries');
      });

      it('should return Aries end Astrological', () => {
        const result = service.getFauxScopes(new Date('04/20/01'))[SignConstants.Astrological];

        expect(result.sign).toEqual('Aries');
      });

      it('should return Taurus start Astrological', () => {
        const result = service.getFauxScopes(new Date('04/21/01'))[SignConstants.Astrological];

        expect(result.sign).toEqual('Taurus');
      });

      it('should return Taurus end Astrological', () => {
        const result = service.getFauxScopes(new Date('05/21/01'))[SignConstants.Astrological];

        expect(result.sign).toEqual('Taurus');
      });

      it('should return Gemini start Astrological', () => {
        const result = service.getFauxScopes(new Date('05/22/01'))[SignConstants.Astrological];

        expect(result.sign).toEqual('Gemini');
      });

      it('should return Gemini end Astrological', () => {
        const result = service.getFauxScopes(new Date('06/21/01'))[SignConstants.Astrological];

        expect(result.sign).toEqual('Gemini');
      });

      it('should return Cancer start Astrological', () => {
        const result = service.getFauxScopes(new Date('06/22/01'))[SignConstants.Astrological];

        expect(result.sign).toEqual('Cancer');
      });

      it('should return Cancer end Astrological', () => {
        const result = service.getFauxScopes(new Date('07/22/01'))[SignConstants.Astrological];

        expect(result.sign).toEqual('Cancer');
      });

      it('should return Leo start Astrological', () => {
        const result = service.getFauxScopes(new Date('07/23/01'))[SignConstants.Astrological];

        expect(result.sign).toEqual('Leo');
      });

      it('should return Leo end Astrological', () => {
        const result = service.getFauxScopes(new Date('08/23/01'))[SignConstants.Astrological];

        expect(result.sign).toEqual('Leo');
      });

      it('should return Virgo start Astrological', () => {
        const result = service.getFauxScopes(new Date('08/24/01'))[SignConstants.Astrological];

        expect(result.sign).toEqual('Virgo');
      });

      it('should return Virgo end Astrological', () => {
        const result = service.getFauxScopes(new Date('09/22/01'))[SignConstants.Astrological];

        expect(result.sign).toEqual('Virgo');
      });

      it('should return Libra start Astrological', () => {
        const result = service.getFauxScopes(new Date('09/23/01'))[SignConstants.Astrological];

        expect(result.sign).toEqual('Libra');
      });

      it('should return Libra end Astrological', () => {
        const result = service.getFauxScopes(new Date('10/23/01'))[SignConstants.Astrological];

        expect(result.sign).toEqual('Libra');
      });

      it('should return Scorpius start Astrological', () => {
        const result = service.getFauxScopes(new Date('10/24/01'))[SignConstants.Astrological];

        expect(result.sign).toEqual('Scorpius');
      });

      it('should return Scorpius end Astrological', () => {
        const result = service.getFauxScopes(new Date('11/22/01'))[SignConstants.Astrological];

        expect(result.sign).toEqual('Scorpius');
      });

      it('should not return Ophiuchus', () => {
        const result = service.getFauxScopes(new Date('12/01/01'))[SignConstants.Astrological];

        expect(result.sign).not.toEqual('Ophiuchus');
      });

      it('should return Sagittarius start Astrological', () => {
        const result = service.getFauxScopes(new Date('11/23/01'))[SignConstants.Astrological];

        expect(result.sign).toEqual('Sagittarius');
      })

    });

    describe('Astronomical', () => {
      it('should return Aries start Astronomical', () => {
        const result = service.getFauxScopes(new Date('04/19/01'))[SignConstants.Astronomical];

        expect(result.sign).toEqual('Aries');
      });

      it('should return Aries end Astronomical', () => {
        const result = service.getFauxScopes(new Date('05/14/01'))[SignConstants.Astronomical];

        expect(result.sign).toEqual('Aries');
      });

      it('should return Taurus start Astronomical', () => {
        const result = service.getFauxScopes(new Date('05/15/01'))[SignConstants.Astronomical];

        expect(result.sign).toEqual('Taurus');
      });

      it('should return Taurus end Astronomical', () => {
        const result = service.getFauxScopes(new Date('6/21/01'))[SignConstants.Astronomical];

        expect(result.sign).toEqual('Taurus');
      });
    });
  });
});