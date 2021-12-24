export default class Age { 
  constructor () { 
    this.dob = 11/4/1978; 
    this.earthTime = 11/6/1978; 
  }

  change () { 
      var difference = this.earthTime.getTime()-this.dob.getTime();
      var difference= Math.abs(this.earthTime-this.dob); 
      days = difference/(1000 * 3600 * 24); 
      return days; 
    }
}