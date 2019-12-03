import React from "react";
import Geocode from "react-geocode";

import SearchBar from "./search_bar.js";
import GoogleMaps from "./google_maps.js";

import "./../../css/utility.css";
import "./../../css/main.css";

class GooglePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lat:12.3,
      lng:14,
      place:""
    }
    this.changePlace = this.changePlace.bind(this);
    this.ConvertToCoords = this.ConvertToCoords.bind(this);
  }

  ConvertToCoords(address){

    Geocode.fromAddress(address).then(
     response => {
       const { lat, lng } = response.results[0].geometry.location;
       console.log(lat,lng);
        this.forceUpdate();
       this.setState({lat:lat,lng:lng,place:address});
     },
     error => {
       console.error(error);
     }
   );
  }

  changePlace(place){
    this.setState({
      place:place
    });

  }

  renderGoogleMaps(){
      return <GoogleMaps lat= {this.state.lat} lng = {this.state.lng}  />
  }

  render(){
    return(
        <div className="container-fluid">
          {this.renderGoogleMaps()}
        </div>
    )
  }
}


export default GooglePage;
