import React from "react";

class VideoSearch extends React.Component {

  render(){
    return(
      <div className="row">
        <div className="col-1"/>

        <div className="col-10">
          <form>
            <input className="inputComment center w100" value = {this.props.vidTerm} placeholder= " Search a video"
              onChange = {
                (e)=>{
                  this.props.setVidTerm(e.target.value);
                }}
            />

            <button
            onClick = {
              (event)=>{
                event.preventDefault();this.props.videoSearch(this.props.vidTerm)
              }}className="submit o"></button>
          </form>

        </div>

      </div>
    );

  }

}

export default VideoSearch;
