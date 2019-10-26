import React from "react";



export default class VideoList extends React.Component {


  renderVids(){
    return this.props.vids.map((vid)=>{
      var image = vid.snippet.thumbnails.default.url;
      return (
        <li className="list-group-item bb">
          <div className="row">
              <div className="col-1"/>
              <div className="col-1">
                <img src = {image} className="w100" />
              </div>
              <div className="col-6">
                <p className="text-center cw">{vid.snippet.title}</p>
              </div>
              <div className="col-3">
                <button className="button w100 ui inverted red"onClick ={(e)=>{this.props.PlayVideo(vid)}}>Play</button>
              </div>

          </div>
        </li>
      )
    })
  }

    render(){
      return(
        <ul className="list-group bb">
            {this.renderVids()}
        </ul>
      )
    }




}
