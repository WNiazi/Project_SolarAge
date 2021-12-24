import Age from './../src/age';
describe('Age', () => {
  let solarAge;
  beforeEach(() => {
    solarAge = new Age ();
    });
    test('it should correctly bring in dob', () => { 
      expect (solarAge.dob).not.toEqual(11/4/1978); 
    });
});