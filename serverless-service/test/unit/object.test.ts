import { cleanAndCopyObject } from '../../src/utils/object';

describe('Object utils', () => {
  describe('Check clean and copy', () => {
    const testingObject = {
      one: 1,
      two: 'two',
      three: undefined,
      four: null,
      five: '',
      six: 0,
      seven: false,
      eight: true,
      nine: [
        1,
        'two',
        undefined,
        null,
        '',
        0,
        false,
        true,
        [1, 'two', undefined, null, '', 0, false, true],
        {
          one: 1,
          two: 'two',
          three: undefined,
          four: null,
          five: '',
          six: 0,
          seven: false,
          eight: true
        }
      ],
      ten: {
        one: 1,
        two: 'two',
        three: undefined,
        four: null,
        five: '',
        six: 0,
        seven: false,
        eight: true,
        nine: [1, 'two', undefined, null, '', 0, false, true],
        ten: {
          one: 1,
          two: 'two',
          three: undefined,
          four: null,
          five: '',
          six: 0,
          seven: false,
          eight: true
        }
      }
    };

    it('Check copying', () => {
      const obj = { one: 1 };
      expect(obj).not.toBe(cleanAndCopyObject(obj));
    });
    it('Check clearing object', () => {
      expect(cleanAndCopyObject(testingObject)).toEqual({
        one: 1,
        two: 'two',
        six: 0,
        seven: false,
        eight: true,
        nine: [
          1,
          'two',
          undefined,
          null,
          '',
          0,
          false,
          true,
          [1, 'two', undefined, null, '', 0, false, true],
          {
            one: 1,
            two: 'two',
            three: undefined,
            four: null,
            five: '',
            six: 0,
            seven: false,
            eight: true
          }
        ],
        ten: {
          one: 1,
          two: 'two',
          three: undefined,
          four: null,
          five: '',
          six: 0,
          seven: false,
          eight: true,
          nine: [1, 'two', undefined, null, '', 0, false, true],
          ten: {
            one: 1,
            two: 'two',
            three: undefined,
            four: null,
            five: '',
            six: 0,
            seven: false,
            eight: true
          }
        }
      });
    });
    it('Check clearing nested object without array', () => {
      expect(cleanAndCopyObject(testingObject, ['', undefined, null], true)).toMatchObject({
        one: 1,
        two: 'two',
        six: 0,
        seven: false,
        eight: true,
        nine: [
          1,
          'two',
          undefined,
          null,
          '',
          0,
          false,
          true,
          [1, 'two', undefined, null, '', 0, false, true],
          {
            one: 1,
            two: 'two',
            three: undefined,
            four: null,
            five: '',
            six: 0,
            seven: false,
            eight: true
          }
        ],
        ten: {
          one: 1,
          two: 'two',
          six: 0,
          seven: false,
          eight: true,
          nine: [1, 'two', undefined, null, '', 0, false, true],
          ten: {
            one: 1,
            two: 'two',
            six: 0,
            seven: false,
            eight: true
          }
        }
      });
    });
    it('Check clearing nested object with array', () => {
      expect(cleanAndCopyObject(testingObject, ['', undefined, null], true, true)).toMatchObject({
        one: 1,
        two: 'two',
        six: 0,
        seven: false,
        eight: true,
        nine: [
          1,
          'two',
          0,
          false,
          true,
          [1, 'two', 0, false, true],
          {
            one: 1,
            two: 'two',
            six: 0,
            seven: false,
            eight: true
          }
        ],
        ten: {
          one: 1,
          two: 'two',
          six: 0,
          seven: false,
          eight: true,
          nine: [1, 'two', 0, false, true],
          ten: {
            one: 1,
            two: 'two',
            six: 0,
            seven: false,
            eight: true
          }
        }
      });
    });
    it('Check clearing nested object with array and specific value', () => {
      expect(
        cleanAndCopyObject(testingObject, ['', undefined, null, 1, false], true, true)
      ).toMatchObject({
        two: 'two',
        six: 0,
        eight: true,
        nine: [
          'two',
          0,
          true,
          ['two', 0, true],
          {
            two: 'two',
            six: 0,
            eight: true
          }
        ],
        ten: {
          two: 'two',
          six: 0,
          eight: true,
          nine: ['two', 0, true],
          ten: {
            two: 'two',
            six: 0,
            eight: true
          }
        }
      });
    });
    it('Check clearing nested object without array and specific value', () => {
      expect(
        cleanAndCopyObject(testingObject, ['', undefined, null, 1, false], true, false)
      ).toMatchObject({
        two: 'two',
        six: 0,
        eight: true,
        nine: [
          1,
          'two',
          undefined,
          null,
          '',
          0,
          false,
          true,
          [1, 'two', undefined, null, '', 0, false, true],
          {
            one: 1,
            two: 'two',
            three: undefined,
            four: null,
            five: '',
            six: 0,
            seven: false,
            eight: true
          }
        ],
        ten: {
          two: 'two',
          six: 0,
          eight: true,
          nine: [1, 'two', undefined, null, '', 0, false, true],
          ten: {
            two: 'two',
            six: 0,
            eight: true
          }
        }
      });
    });
    it('Check clearing first level object with depp array', () => {
      // array is in object, object clearing only the first level, but array on a second
      expect(cleanAndCopyObject(testingObject, ['', undefined, null], false, true)).toMatchObject({
        one: 1,
        two: 'two',
        six: 0,
        seven: false,
        eight: true,
        nine: [
          1,
          'two',
          undefined,
          null,
          '',
          0,
          false,
          true,
          [1, 'two', undefined, null, '', 0, false, true],
          {
            one: 1,
            two: 'two',
            three: undefined,
            four: null,
            five: '',
            six: 0,
            seven: false,
            eight: true
          }
        ],
        ten: {
          one: 1,
          two: 'two',
          three: undefined,
          four: null,
          five: '',
          six: 0,
          seven: false,
          eight: true,
          nine: [1, 'two', undefined, null, '', 0, false, true],
          ten: {
            one: 1,
            two: 'two',
            three: undefined,
            four: null,
            five: '',
            six: 0,
            seven: false,
            eight: true
          }
        }
      });
    });
  });
});
