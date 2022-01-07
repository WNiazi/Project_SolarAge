import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css'; 
import Age from './js/age';


$(document).ready(function() {
  $('#formOne').submit(function(event) {
     event.preventDefault();
    const planet = $('#planets').val();
    console.log (planet); 
    const lifeExpectancy = parseInt ($('#life_expenctancy').val());
    console.log(lifeExpectancy); 
    const activity = parseInt ($('#activity').val());
    console.log(activity); 
    const lifestyle = parseInt ($('#lifestyle').val()); 
    console.log (lifestyle); 
    const inputtedAge = $('#birth_date').val(); 
      function changeAge () {
        var userDate = Date.parse(inputtedAge); 
        var newDate = Date.now(); 
        var ageMs = newDate - userDate; 
        var birthYear = Math.round(ageMs/(1000*3600*24*365))
        return birthYear;
      }
  
      $('#activity').val("");
      $('#lifeExpectancy').val("");
      $('#planets').val("");  
      $('#lifestyle').val("");
      $('#birth_date').val("");

      // let solarAge = new Age (planet, lifeExpectancy, activity, lifestyle, birthYear);
      //  const response = solarAge.checkType();
      //  $('#results').append(<p> "birthYear" "</p>);
      //    $('#results').append(<p>"planetPicked" "</p>);
      //    $('#results').append(<p>"adjusted age" "</p>);
         });
  });

 
