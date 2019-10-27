import React from "react";

class CountdownDisplay extends React.Component {
  render(){
      return(
        <div className="row">
            <div className="col-4 ml5"/>

            <div className="col-1 p0 ">
              <input className="cw no-style text-right  w100 bigText bb" onClick = {()=>{this.props.StopCountDown()}} type="number" onChange = {(e)=>{this.props.changeMinutes(e.target.value)}} value = {this.props.minutes}/>
            </div>
            <div className="col-1 p0 ">
              <h1 className="cw  text-center bigText">:</h1>
            </div>
            <div className="col-1 p0">
            <input className="cw no-style text-left  w100 bigText bb" onClick = {()=>{this.props.StopCountDown()}} type="number" onChange = {(e)=>{this.props.changeSeconds(e.target.value)}} value = {this.props.seconds}/>
            </div>
        </div>
      )
  }
}

export default CountdownDisplay;
