import Age from './../src/js/age'; 
describe('Age', () => {
  var solarAge; 
  beforeEach(() => {
    solarAge = new Age (); 
    });
    test('it should correctly bring in birthday', () => { 
      let solarAge = new Age ('November 4, 1978','December 24, 2021');
      expect (solarAge.birthday).toEqual('November 4, 1978'); 
      expect (solarAge.today).toEqual('December 24, 2021');
      expect (solarAge.calculateBirthday()).toEqual(43);
      expect (solarAge.birthYear).toEqual (43); 
    });
    test('it should correctly bring in varations', ()=> {
      let solarAge =new Age ('November 4, 1978','December 24, 2021', 43, 1, 0);
      expect (solarAge.calculateVaration()).toEqual(44);
    });
    test('it should correctly bring in varations', ()=> {
      let solarAge =new Age ('November 4, 1978','December 24, 2021', 43, 1, 1);
      expect (solarAge.calculateVaration()).toEqual(46);
    });
    test('it should correctly bring in varations', ()=> {
      let solarAge =new Age ('November 4, 1978','December 24, 2021', 43, 1, 4);
      expect (solarAge.calculateVaration()).toEqual(53);
    });
    test ('it should subtract from life expectancy', () => {
      let solarAge =new Age ('November 4, 1978','December 24, 2021', 43, 1, 1);
       expect (solarAge.calLifeExpectancyEarth()).toBe(37); 
    });
    test('it should provide the age in other planets/Mercury', () => { 
      let solarAge =new Age ('November 4, 1978','December 24, 2021', 43, 0, 0);
      expect (solarAge.calAgeMercury()).toBe(179); 
      expect (solarAge.calAgeVenus()).toBe(69); 
      expect (solarAge.calAgeMars()).toBe(23); 
      expect (solarAge.calAgeJupiter()).toBe(4); 
    });
    test ('it should provide values', () => {  
      let solarAge =new Age ('November 4, 1978','December 24, 2021', 43, 0, 0, 179, 69, 23, 4);
      expect (solarAge.calLifeExpMercury()).toContain(99); 
      expect (solarAge.calLifeExpVenus()).toContain(11);
      expect (solarAge.calLifeExpMars()).toContain(57);
      expect (solarAge.calLifeExpJupiter()).toContain(76);
    });
    test ('it should provide values', () => {  
      let solarAge =new Age ('November 4, 1978','December 24, 2021', 43, 1, 1, 2, 100, 300, 85);
      expect (solarAge.calLifeExpMercury()).toContain(78); 
      expect (solarAge.calLifeExpVenus()).toContain(20);
      expect (solarAge.calLifeExpMars()).toContain(220);
      expect (solarAge.calLifeExpJupiter()).toContain(5);
    });
});