import React from "react";
import "./../../css/utility.css";
import "./../../css/main.css";

class SearchBar extends React.Component {

  render(){
    return(
      <div className="row">
      <br />
        <div className="col-2"/>
        <div className="col-6">
          <br />
          <input  value = {this.props.place} className="form-control bb text-center cw "
            onChange = {(e)=>{
              e.preventDefault();
              var value = e.target.value;
              this.props.changePlace(value);
            }}
           placeholder = " Enter Address"/>
        </div>
        <div className="col-2 p0">
          <br />
          <button className="ui button inverted w100 blue" onClick = {
            ()=>{
              this.props.ConvertToCoords(this.props.place);
            }
          }>Search</button>
        </div>
        <div className="col-1"/>
      </div>
    )
  }
}

export default SearchBar;
