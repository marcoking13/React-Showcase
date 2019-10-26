import React from "react";



class VideoDetail extends React.Component {



  render(){
    if(this.props.vid){
      const key = this.props.vid.id.videoId;
      const url = "http://youtube.com/embed/"+key;
      return(
        <div className="row">
          <div className="col-1"/>
          <div className="col-10">

            <div className="embed-responsive embed-responsive-16by9">
              <iframe  src={url} className="embed-responsive-item"></iframe>
            </div>

            <div className="details">
              <div>{this.props.vid.snippet.title}</div>
              <div>{this.props.vid.snippet.description}</div>
            </div>

          </div>
            <div className="col-1"/>
        </div>
      )
    }else{
      return null;
    }
  }

}



export default VideoDetail;
