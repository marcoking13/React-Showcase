import React from "react";
import Geocode from "react-geocode";
import cookies from "react-cookies";
import {GoogleApiWrapper} from 'google-maps-react';
import {Map, Marker, google} from 'google-maps-react';
import axios from 'axios';





class GoogleMaps extends React.Component {


  render(){
    return(
    <div>
      <input className="form-control bb cw text-center" value = {this.props.location} onChange = {(e)=>{this.setLocation(e.target.value)}}/>
      <div className="container-fluid" style={{width:"1000px",height:"1000px"}}>
          <Map  google = {google} center= {{lat:2,lng:2}} zoom = {14}>
               <Marker icon = {{url:"assets/images/ringer.gif",scaledSize: new google.maps.Size(50,50)}} position={{lat:2, lng:2}} />
          </Map>
      </div>
    </div>
    )
  }


}

export default GoogleApiWrapper(
  {
    apiKey: "AIzaSyC39c6JQfUTYtacJlXTKRjIRVzebGpZ-GM",
    LoadingContainer: <div />
  })(GoogleMaps);
