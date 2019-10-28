import React from "react";

class ImageResults extends React.Component {

  renderImages(){
    return this.props.images.map((image)=>{

      return (
          <div className="col-2 p0 bBB turnRedB">
              <img className="w100 stock" src= {image.urls.regular}/>
          </div>
      )

    });

  }

  render(){
    if(this.props.images.length > 0){
      return(
        <div className="row">

          <ul className=" row">
              {this.renderImages()}
          </ul>

        </div>
      )
    }else{
      return <div />
    }
  }
}

export default ImageResults;
