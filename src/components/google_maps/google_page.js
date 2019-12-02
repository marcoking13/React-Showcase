import React from "react";

import SearchBar from "./search_bar.js";
import GoogleMaps from "./google_maps.js";

import "./../../../utility.css";
import "./../../../main.css";

class GoogleMaps extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lat:null,
      lng:null,
      place:""
    }
    this.changePlace = this.changePlace.bind(this);
  }

  changePlace(place){
    this.setState({
      place:place
    });
  }

  render(){
    return(
        <div className="container-fluid">
          <SearchBar  changePlace = {this.changePlace}/>
        </div>
    )
  }
}


export default GooglePage;
