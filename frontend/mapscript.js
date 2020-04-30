const express = require("express")
const fs = require("fs")
const request = require('request');
const port = 3000

var allcount =[]
var contents = fs.readFileSync("countrylist.txt", 'utf8');
contents = JSON.parse(contents)
  
contents.forEach(ok2 =>{

search = bb.concat(toString(ok2))
  request(`https://api.covid19api.com/live/country/${ok2}`, (req , res)=> { 
    
   
    var data = JSON.parse(res.body)
    const ch =data[1]
    var count = []
    if(res.statusCode == 200)
    {
    if(ch != undefined)
    {
      lats = data[1]["Lat"]
      longs = data[1]["Lon"]
      confermed = data[1]["Confirmed"]
      count = [lats , longs ,confermed]
    }

    allcount.push(count)
}

  });
})


  function initMap() {
  

        var myLatLng = {lat: -25.363, lng: 131.044};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
      center: new google.maps.LatLng(-33.92, 151.25),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < allcount.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(allcount[i][0], allcount[i][1]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
      }
      google.maps.event.addDomListener(window, 'load', initialize);
