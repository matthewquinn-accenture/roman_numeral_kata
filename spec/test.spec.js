import jasmine from 'jasmine';
import { hello_World } from '../src/main.js';

describe('a test', () => {
    it('should return true', () => {
        expect(hello_World()).toBe(true);
    });
});