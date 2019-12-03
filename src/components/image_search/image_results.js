import React from "react";

class ImageResults extends React.Component {

  renderImages(){
    return this.props.images.map((image)=>{

      return (
          <div className="col-2 p0 ">
              <img className="w100 h300px "  key = {image.urls.regular} src= {image.urls.regular}/>
          </div>
      )

    });

  }

  render(){
    if(this.props.images.length > 0){
      return(
        <div className="row">

          <ul className=" row p0">
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
