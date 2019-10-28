import React from "react";

import faker from "faker"

import "./../css/utility.css";

export default class Comments extends React.Component{

  render(){
    return(
        <div className="ui  container comments">
          <div className="comment">

            <a href="/" className="avatar">
              <img alt="avatar" src = {this.props.avatar}/>
            </a>

            <div className="content">

              <a href="/" className="cw author">
                {this.props.name}
              </a>

              <div className="metadata cw">
                <span className="date gr">{"Posted at: " + Math.floor(Math.random() * 12) +":"+ Math.floor(Math.random() * 60)} </span>
              </div>

              <div className="text cw">
                {this.props.comment}
              </div>

            </div>

          </div>

        </div>
    );

  }

}
