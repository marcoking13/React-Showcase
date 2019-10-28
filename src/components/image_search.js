import React from "react";

class ImageSearch extends React.Component {

  render(){

    return(
      <div className="row">
        <div className="col-1"/>

        <div className="col-10">

          <form onSubmit={(e)=>{
            e.preventDefault();
            this.props.ImageSearch(this.props.imageTerm);
          }}>

            <input value = {this.props.imageTerm} onChange = {this.props.setImageTerm} className="inputComment center w100"  placeholder= " Search Images"  />
            <button className="submit o"></button>

          </form>

        </div>

      </div>
    )
  }
}

export default ImageSearch;
