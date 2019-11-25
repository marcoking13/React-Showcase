import React from 'react';

import "./../../css/main.css";
import "./../../css/utility.css"

class  Trippy  extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      styleOne:{},
      styleTwo:{},
      background:"rb(00,39,9)"
    }

  }

  onMouseMove = (event) => {
    var xAxis = event.pageX;
    var yAxis = event.pageY;

    var color = `rb(00,${xAxis},${yAxis})`;

    this.setState({
      styleOne: this.transform(-event.clientX / event.clientY),
      styleTwo: this.transform(event.clientX / event.clientY),
      background:`rb(00,${xAxis},${yAxis})`
    });

  }

   transform(offset) {
    const cos = Math.cos(offset);
    const sin = Math.sin(offset);
    return { transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}, ${sin}, 0, 0, 0, ${cos}, ${cos}, ${sin}, 0, 0, 0, 1)` };
  }


  render(){
      return (
        <div style ={{backgroundColor:this.state.background}} onMouseMove = {(e)=>this.onMouseMove(e)}>

          <div className="parent">
            <div className="panel mt5 br50 cover" onMouseMove = {(e)=>this.onMouseMove(e)} style={this.state.styleOne}/>
            <div className="panel mt5 br50 cover posRel moveDown200px" onMouseMove = {(e)=>this.onMouseMove(e)}style={this.state.styleTwo}/>
          </div>

        </div>
      );
    }
}

export default Trippy;
