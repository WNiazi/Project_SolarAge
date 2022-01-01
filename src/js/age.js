export default class Age {
  constructor (birthday, today) { 
    this.birthday = birthday; 
    this.today = today;  
    this.lifeExpectancy = 80;  
    this.birthYear = 53;
    this.activity = 2;  
    this.lifestyle = 3; 
    this.mercuryAge = this.calAgeMercury ();
    this.venusAge = this.calAgeVenus(); 
    this.marsAge = this.calAgeMars(); 
    this.jupiterAge = this.calAgeJupiter(); 
  }
  calculateBirthday () { 
    let birthday = new Date ('November 4, 1978'); 
    let today = new Date ('December 24, 2021');  
    this.birthYear = Math.round(((today.getTime()) -(birthday.getTime()))/(24*60*60*1000*365));
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
    let mercuryRate = ('.24'); 
    let mercuryAge =Math.round(this.birthYear/mercuryRate);  
    return(mercuryAge); 
  }
  calAgeVenus () {
    let venusRate = ('.62'); 
    let venusAge =Math.round(this.birthYear/venusRate); 
    return(venusAge); 
  }
  calAgeMars () { 
    let marsRate = ('1.88'); 
    let marsAge =Math.round(this.birthYear/marsRate); 
    return(marsAge); 
  }
  calAgeJupiter () { 
    let jupiterRate = ('11.86'); 
    let jupiterAge =Math.round(this.birthYear/jupiterRate); 
    return(jupiterAge); 
  }
  calLifeExpMercury () {
    let lifeExpMer = (this.mercuryAge -this.lifeExpectancy); 
    if (lifeExpMer > 0) { 
      return ("You have been dead to us for " + lifeExpMer + ".");
    } else {
      return ("You have" + Math.abs(lifeExpMer) + "more years to live"); 
    }
  }
  calLifeExpVenus () {
    let lifeExpVenus = (this.venusAge -this.lifeExpectancy); 
    if (lifeExpVenus > 0) { 
      return ("You have been dead to us for " + lifeExpVenus + ".");
    } else {
      return ("You have" + Math.abs(lifeExpVenus) + "more years to live"); 
    }
  }
  calLifeExpMars () {
    let lifeExpMars = (this.marsAge -this.lifeExpectancy); 
    if (lifeExpMars > 0) { 
      return ("You have been dead to us for " + lifeExpMars + ".");
    } else {
      return ("You have" + Math.abs(lifeExpMars) + "more years to live" );
    }
  }

  calLifeExpJupiter () { 
    let lifeExpJupiter = (this.lifeExpectancy- this.jupiterAge); 
    if (lifeExpJupiter < 0) { 
      return ("You have been dead to us for " + Math.abs(lifeExpJupiter) + ".");
    } else {
      return ("You have" + lifeExpJupiter + "more years to live" );
    }
  }
}

  //   const ratesOthers = {
  //     earth: 1,
  //     mercury: .24,
  //     venus: .62,
  //     jupiter: 11.86
  //   }; 
  //   const ratesOthers2 =Object.fromEntries (Object.entries (ratesOthers).map(([key, val])=>[key,(Math.round (43/val)) ]));
    
  //   var earthkey = Object.keys(ratesOthers2)[0];
  //   var earthAge = ratesOthers2 [earthkey]; 

  //   var mercurykey =Object.keys(ratesOthers2)[1]; 
  //   let mercuryAge = ratesOthers2 [mercurykey]; 

  //   var venuskey =Object.keys(ratesOthers2)[2];
  //   let venusAge = ratesOthers2 [venuskey]; 

  //   var jupiterkey =Object.keys(ratesOthers2)[3];
  //   let jupiterAge = ratesOthers2 [jupiterkey]; 
  // }




