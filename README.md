# Project_Solar_Age 

#### By Wajma Niazi

#### Creating application which checks for age on various planets. 

## Technologies Used

* VS Code
* CSS 
* HTML 
* jQuery
* Bootstrap
* Webpack/NPM 


## Description

__From User's Inputs getting birthday, life expectancy and calculating various solar ages on various planets, testing throughout the project. 

__Please go to https://github.com/WNiazi/Project_SolarAge list git hub page to view project.  

## Setup/Installation Requirements
* _Clone Repository to your desktop  
* _Put "npm install" in terminal to install packages, then "npm run build"
* _Put "npm start" in terminal
*_"npm test" to check TDD/testing  

## Testing
``` 
Describe: Creating a Object property and using it against the User's inputs.  
```
Test: It will present user with birthday. Setting birthday/today's date. 
Code: var birthYear = Math.round(((today.getTime()) -(birthday.getTime()))/(24*60*60*1000*365));
Expected Output:  43 
```
Test: It will provide Life Expectancy on Earth.  
Code:   calculated birthYear -inputted LifeExpectancy.  let LifeExpectancy =80; 
Expected Output:  37
```
Test: It will calculate age in other planets based on Earth age and given factor.  
Code:   EarthAgeYears, divided by factor provided (0.24 for Mercury); let result =Math.round(result); 
Expected Output:  179 
```

## Known Bugs
* _UI logic is not available. Ready/Submit function are not working appropriately 

## License

_MIT

Copyright (c) 2021 Wajma Niazi