import $, { event } from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Age from './js/age';

// $( handler )
//   $('#formOne').trigger(event); {
//     // event.preventDefault(); 
// $(function() {
//   $('#formOne').trigger(function(event){
//     event.preventDefault(); 
//     console.log ("help");

//     const planet = $('#planets').val();
//     const lifeExpectancy = parseInt ($('#life_expenctancy').val());
//     const activity = parseInt ($('#activity').val());
//     const lifestyle = parseInt ($('#lifestyle').val()); 
//     const inputtedAge = $('#birth_date').val(); 
//       function changeAge () {
//         var userDate = Date.parse(inputtedAge); 
//         var newDate = Date.now(); 
//         var ageMs = newDate - userDate; 
//         var birthYear = Math.round(ageMs/(1000*3600*24*365))
//         return birthYear;
//       }
  
//       $('#activity').val("");
//       $('#lifeExpectancy').val("");
//       $('#planets').val("");  
//       $('#lifestyle').val("");
//       $('#birth_date').val("");

//       let solarAge = new Age (planet, lifeExpectancy, activity, lifestyle, birthYear);
// //       const response = solarAge.checkType();
// //       $('#results').append("birthYear" + response + "</p>");
// //     });
// //   });

// //  
//   });
//  });