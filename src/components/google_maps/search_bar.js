import React from "react";
import "./../../../utility.css";
import "./../../../main.css";

class SearchBar extends React.Component {
  constructor(props){
    super(props);


  }
  render(){
    return(
      <div className="row">
        <div className="col-3"/>
        <div className="col-6">
          <input className="form-control text-center cw " onChange = {(e)=>{
            e.preventDefault();
            var value = e.target.value;
            this.props.changePlace(value);
          }} placeholder = " Enter Address"/>
        </div>
        <div className="col-3"/>
      </div>
    )
  }
}

export default SearchBar;
