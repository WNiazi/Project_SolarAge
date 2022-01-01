import Age from './../src/js/age'; 
describe('Age', () => {
  var solarAge; 
  beforeEach(() => {
    solarAge = new Age (); 
    });
    test('it should correctly bring in birthday', () => { 
     solarAge = new Age ('November 4, 1978');
      expect (solarAge.birthday).toEqual('November 4, 1978'); 
    });
    test ('it should give the age of user with variation depending on lifestyle/activity', () => {
      expect (solarAge.calculateBirthday()).toBe(53); 
    }); 
    test ('it should subtract from life expectancy', () => {
      expect (solarAge.calLifeExpectancyEarth()).toBe(27); 
    }); 
    test('it should provide the age in other planets/Mercury', () => { 
      expect (solarAge.calAgeMercury()).toBeGreaterThan(179); 
      expect (solarAge.calAgeVenus()).toBeGreaterThan(69); 
      expect (solarAge.calAgeMars()).toBeGreaterThan(23); 
      expect (solarAge.calAgeJupiter()).toBe(4); 
    }); 
    test('it should provide lifeExpectancy varying per planet', () => { 
      expect (solarAge.calLifeExpMercury()).toContain('dead'); 
      expect (solarAge.calLifeExpVenus()).toContain('live');
      expect (solarAge.calLifeExpMars()).toContain('live');
      expect (solarAge.calLifeExpJupiter()).toContain('live');
    });
});