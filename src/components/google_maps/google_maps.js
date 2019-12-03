import React from "react";
import {GoogleMap, withScriptjs,withGoogleMap,Marker} from "react-google-maps";
import { compose, withProps } from "recompose"
import Geocode from "react-geocode";
import axios from 'axios';

Geocode.setApiKey("AIzaSyDT3CvnaTo7AnBgi4XRNHPrf0_hDTrF0EE");
Geocode.setLanguage("en");
Geocode.enableDebug();
//----------------------------------------Wrapper Component--------------------------------------------------------//
const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDT3CvnaTo7AnBgi4XRNHPrf0_hDTrF0EE",
    loadingElement: <div style={{ height: `50%` }} />,
    containerElement: <div style={{ height: `650px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
    <GoogleMap  zoom={8} center = {{lat:props.lat,lng:props.lng}} />
)
//--------------------------------------Map Component----------------------------------------------------------//
export default class Maps extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      lat:-34.397,
      lng:150.644,
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

  render(){
    console.log(this.state.lat,this.state.lng);
      return (
        <div className="container-fluid">
          <div className="row">
          <br />
            <div className="col-2"/>
            <div className="col-6">
              <br />
              <input  value = {this.state.place} className="form-control bb text-center cw "
                onChange = {(e)=>{
                  e.preventDefault();
                  var value = e.target.value;
                  this.changePlace(value);
                }}
                placeholder = " Enter Address"/>
                </div>
                <div className="col-2 p0">
                <br />
                <button className="ui button inverted w100 blue" onClick = {
                  ()=>{
                    this.ConvertToCoords(this.state.place);
                  }
                }>Search</button>
              </div>
            <div className="col-1"/>
          </div>
          <br />
          <div style={{width:"100vw",height:"100vh"}}>
            <MyMapComponent  lat = {this.state.lat} lng = {this.state.lng}/>
          </div>
        </div>
      );
    }
  }
