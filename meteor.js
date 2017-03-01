$(document).ready(function() {

  var showersByMonth = [
    {
      "Json" : 0,
      "Month": "January",
      "Event": "Geminids Meteor Shower",
      "PeakDates": "Jan 3 - 4"},
    {
      "Json" : 1,
      "Month": "February",
      "Event": "Annular Solar Eclipse",
      "PeakDates": "February 26"},
    {
      "Json" : 2,
      "Month": "March",
      "Event": "Mercury Moon Mars Triangle",
      "PeakDates": "March 29"},
    {
      "Json" : 3,
      "Month": "April",
      "Event": "Lyrids Meteor Shower",
      "PeakDates": "March 29"},
    {
      "Json" : 4,
      "Month": "May",
      "Event": "Eta Aquarid Meteor Shower",
      "PeakDates": "May 5 - 6"},
    {
      "Json" : 5,
      "Month": "June",
      "Event": "Summer Solstice",
      "PeakDates": "June 21"},
    {
      "Json" : 6,
      "Month": "July",
      "Event": "Alpha Capricornid Meteor Shower",
      "PeakDates": "July 26 - 27"},
    {
      "Json" : 7,
      "Month": "August",
      "Event": "Perseids Meteor Shower",
      "PeakDates": "August 11 - 12"},
    {
      "Json" : 7,
      "Month": "August",
      "Event": "Total Solar Eclipse",
      "PeakDates": "August 21"},
    {
      "Json" : 8,
      "Month": "September",
      "Event": "Fall Equinox",
      "PeakDates": "September 22"},
    {
      "Json" : 9,
      "Month": "October",
      "Event": "Southern Taurids Meteor Shower",
      "PeakDates": "October 9 - 10"},
    {
      "Json" : 9,
      "Month": "October",
      "Event": "Orionids Meteor Shower",
      "PeakDates": "October 21 - 22"},
    {
      "Json" : 10,
      "Month": "November",
      "Event": "Northern Taurids Meteor Shower",
      "PeakDates": "November 10 - 11"},
    {
      "Json" : 10,
      "Month": "November",
      "Event": "Leonids Meteor Shower",
      "PeakDates": "November 17 - 18"},
    {
      "Json" : 11,
      "Month": "December",
      "Event": "Geminids Meteor Shower",
      "PeakDates": "December 13 - 14"},
    {
      "Json" : 11,
      "Month": "December",
      "Event": "Ursids Meteor Shower",
      "PeakDates": "December 21 - 22"}
    ];


  function jsonData(){
    $("#jsonTest").html("<p>" + "Here is some stuff getting pulled from JSON obj" +
      showersByMonth[7].Json + " " + showersByMonth[7].Month + " " +
      showersByMonth[7].Event + " " + showersByMonth[7].PeakDates);
      }

      jsonData();

    //this is a test function to play with JSON.stringify
  function gah(){
      var string = JSON.stringify(showersByMonth, ['Month', 'Event', 'PeakDates']);
      console.log(string);
      $("#ok").html("<p>" + string);
      }

      gah();


    function handleInput(){
        $('.input').keypress(function(e){
          if(e.which == 13){
            var zipcode = e.target.value

            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode
                + ",us&APPID=313186e768d1b0e1e4e192f966703b6e", method: "GET"})
                .done(function(data){
                  //selecting the container class appending and clearing the value with the 1st element in the api object
                  $(".container").html("<p>" + "The current weather is " + data.weather[0].description + "</p>");
                  var forecastApi = data.weather[0].description;
                  var weatherResult = evalWeather(forecastApi);
                  printMessage(weatherResult);
                  console.log(weatherResult);
                  });
                }
              })
            }

        handleInput();

    //the result of this function gets set to weatherResult which is passed into printMessage
    function evalWeather(forecastApi){
          var weatherResult = " weatherResult";
          if(forecastApi != "clear sky") {
              message = "Sorry, bad visibility for meteor showers";
              } else {
              message = "You're in luck! Look up, great weather!"};
              return message;
              console.log(message);
            }


    //this gets called in handleInput()
    function printMessage(message){
          $(".message").html("<p>" + message);
          };


    function printDate(){
          var month = new Date().getMonth();
          console.log(month);
          var date = new Date().toLocaleString();
          $(".date").html("<p>" + "The time is " + date);
          }

          printDate();


});
