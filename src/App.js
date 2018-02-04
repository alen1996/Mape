import React from 'react';

import './index.css';
const google = window.google;
export default class App extends React.Component
{
  constructor() {
    super();
    this.state = {

      data:[],
      data2:[],
      zoom: 13,
      maptype: 'roadmap',
      place_formatted: '',
      place_id: '',
      place_location: '',
                 };
                 }

  componentDidMount() {
     fetch('/api/dates').then(response => response.json())
      .then((findresponse) =>
      {
    this.setState(
      {data2:findresponse.Podaci
      }          );
var i=0;

for(i;i<findresponse.Podaci.length;i++)
    {

       let marker = new window.google.maps.Marker({
       map: map,
       ok: '',
       position: {lat: -5, lng: 5},
       Datum:' '
                                                 });
       var latlng = new google.maps.LatLng(findresponse.Podaci[i].lat,findresponse.Podaci[i].lng);
       marker.setPosition(latlng);
       marker.Datum=findresponse.Podaci[i].Date;
       var infowindow = new google.maps.InfoWindow
        ({
          content: ''
        });



        marker.addListener
        ('click', function()
        {




        infowindow.setContent(marker.Datum);
        infowindow.open(this.map, marker);
        var c=0;
        if(marker.ok=="true")
          {marker.ok='';

           infowindow.close();
           c=1;
           }


        if(c==0)marker.ok='true';
;
        });










     }




      }
            );






    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 43.8562586, lng: 18.4130763},
      zoom: 13,
      mapTypeId: 'roadmap',
    });

    map.addListener
    ('zoom_changed', () => {
      this.setState
      ({
        zoom: map.getZoom(),
      });
    });

    map.addListener('maptypeid_changed',
   () => {
      this.setState({
        maptype: map.getMapTypeId(),
                   });
    });






    // initialize the autocomplete functionality using the #pac-input input box









                        }

  render() {
    return (

      <div id='app'>

      {this.state.data2.map((dynamicData,i)=>
        <div>

     <span>Koordinata x  {dynamicData.lat}</span>
     <span> Koordinata y {dynamicData.lng}</span>
     <span> Koordinata Vrijeme {dynamicData.Date}</span>
      </div>
           )
           }
        <div id='map' />
      </div>

    );
  }
};
