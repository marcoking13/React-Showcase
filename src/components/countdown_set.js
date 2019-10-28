import React from "react";

class CountdownSet extends React.Component {
  render(){
      return(
          <div className="row mt5">

            <div className="col-3"/>
            <div className="col-3">
              <button onClick = {()=>{this.props.StopCountDown()}} className="button ui inverted orange w100">Reset</button>
            </div>

            <div className="col-3">
              <button onClick = {()=>{this.props.CountDown()}} className="button ui inverted green w100">Start</button>
            </div>

            <div className="col-3"/>
          </div>
      );

    }
  }

export default CountdownSet;
