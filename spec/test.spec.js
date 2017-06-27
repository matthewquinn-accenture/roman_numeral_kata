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
});