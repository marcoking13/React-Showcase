import React from 'react';

import "./../css/main.css";
import "./../css/utility.css"

class  Trippy  extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      styleOne:{},
      styleTwo:{}
    }
  }

  onMouseMove = (event) => {
    this.setState({
      styleOne: this.transform(-event.clientX / event.clientY),
      styleTwo: this.transform(event.clientX / event.clientY)
    })
  }

   transform(offset) {
    const cos = Math.cos(offset);
    const sin = Math.sin(offset);
    return { transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}, ${sin}, 0, 0, 0, ${cos}, ${cos}, ${sin}, 0, 0, 0, 1)` };
}


  render(){
  
      return (
        <div className="bb " onMouseMove = {(e)=>this.onMouseMove(e)}>
          <div className="parent">
            <div className="panel" onMouseMove = {(e)=>this.onMouseMove(e)} style={this.state.styleOne}/>
            <div className="panel panel2" onMouseMove = {(e)=>this.onMouseMove(e)}style={this.state.styleTwo}/>
          </div>
        </div>
      );
    }
}

export default Trippy;
