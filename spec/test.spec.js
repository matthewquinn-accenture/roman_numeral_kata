import jasmine from 'jasmine';
import { roman_numeral } from '../src/main.js';

describe('Roman Numeral Converter', () => {
    it('should convert 1 to Roman Numeral I', () => {
        expect(roman_numeral(1)).toBe('I');
    });

    it('should convert 2 to Roman Numeral II', () => {
        expect(roman_numeral(2)).toBe('II');
    });

    it('should convert 3 to Roman Numeral III', () => {
        expect(roman_numeral(3)).toBe('III');
    });

    it('should convert 4 to Roman Numeral IV', () => {
        expect(roman_numeral(4)).toBe('IV');
    });

    it('should convert 5 to Roman Numeral V', () => {
        expect(roman_numeral(5)).toBe('V');
    });

    it('should convert 6 to Roman Numeral VI', () => {
        expect(roman_numeral(6)).toBe('VI');
    });
    

});