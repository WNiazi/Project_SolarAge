export default class Age {
  constructor (birthday, today, birthYear, activity, lifestyle, mercuryAge, venusAge, marsAge, jupiterAge) { 
    this.birthday = birthday; 
    this.today = today;   
    this.birthYear = birthYear;
    this.activity = activity;  
    this.lifestyle = lifestyle; 
    this.mercuryAge= mercuryAge; 
    this.venusAge = venusAge;  
    this.marsAge = marsAge 
    this.jupiterAge = jupiterAge; 
    this.lifeExpectancy = 80; 
  }
  calculateBirthday () { 
    let birthday = new Date ('November 4, 1978'); 
    let today = new Date ('December 24, 2021');
    this.birthYear = Math.round(((today.getTime()) -(birthday.getTime()))/(24*60*60*1000*365));
    return (this.birthYear);
  }
  calculateVaration () {
    const result =(this.activity + this.lifestyle);
      if (result < 2 ) {
        this.birthYear += 1; 
      } else if (result >= 2 && result <= 4) {
        this.birthYear += 3 ; 
      } else {
        this.birthYear += 10; 
      }
    return this.birthYear;
  } 
  calLifeExpectancyEarth () { 
    return ( this.lifeExpectancy- this.birthYear);
  }
  calAgeMercury () { 
    this.birthYear=43;  
    this.mercuryAge = Math.round(this.birthYear/.24); 
    return this.mercuryAge; 
  }
  calAgeVenus () {
    this.birthYear =43; 
    let venusAge =Math.round(this.birthYear/.62); 
    return venusAge; 
  }
  calAgeMars () {  
    this.birthYear =43; 
    let marsAge =Math.round(this.birthYear/1.88); 
    return marsAge; 
  }
  calAgeJupiter () { 
    this.birthYear =43; 
    let jupiterAge =Math.round(this.birthYear/11.86); 
    return jupiterAge; 
  }
  calLifeExpMercury () {
    let lifeExpMer = (this.mercuryAge-this.lifeExpectancy); 
    if (lifeExpMer > 0) { 
      return ("You have been dead to us for " + lifeExpMer + " years.");
    } else {
      return ("You have " + (Math.abs(lifeExpMer)) + " more years to live"); 
    }
  }
  calLifeExpVenus () {
    let lifeExpVenus = (this.venusAge -this.lifeExpectancy); 
    if (lifeExpVenus > 0) { 
      return ("You have been dead to us for " + lifeExpVenus + " years.");
    } else {
      return ("You have " + (Math.abs(lifeExpVenus)) + " more years to live"); 
    }
  }
  calLifeExpMars () {
    let lifeExpMars = (this.marsAge -this.lifeExpectancy); 
    if (lifeExpMars > 0) { 
      return ("You have been dead to us for " + lifeExpMars + " years.");
    } else {
      return ("You have " + Math.abs(lifeExpMars) + " more years to live" );
    }
  }
  calLifeExpJupiter () { 
    let lifeExpJupiter = (this.lifeExpectancy- this.jupiterAge); 
    if (lifeExpJupiter < 0) { 
      return ("You have been dead to us for " + Math.abs(lifeExpJupiter) + " years.");
    } else {
      return ("You have " + lifeExpJupiter + " more years to live" );
    }
  }
}




//   calRatePlantet () { 
//     const ratesOthers = {
//       earth: 1,
//       mercury: .24,
//       venus: .62,
//       jupiter: 11.86
//     }; 
//     const ratesOthers2 =Object.fromEntries (Object.entries (ratesOthers).map(([key, val])=>[key,(Math.round (43/val)) ]));

//     var earthkey = Object.keys(ratesOthers2)[0];
//     this.earthAge = ratesOthers2 [earthkey]; 
//     var mercurykey =Object.keys(ratesOthers2)[1]; 
//     this.mercuryAge = ratesOthers2 [mercurykey]; 

//     var venuskey =Object.keys(ratesOthers2)[2];
//     this.venusAge = ratesOthers2 [venuskey]; 

//     var jupiterkey =Object.keys(ratesOthers2)[3];
//     this.jupiterAge = ratesOthers2 [jupiterkey]; 
//   }

// }

