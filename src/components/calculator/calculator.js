import React from "react";
import axios from "axios";

export default class Calculator extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      equation:"",
    }

  }

  setEquation(eq){

    if(eq == "="){
      var result = eval(this.state.equation);
      this.setState({equation:result});
    }else{
      this.setState({equation:this.state.equation + eq});
    }

  }

  renderNumbers(){
    var numbers= ["0","1","2","3","4","5","6","7","8","9","*","/","-","+","="];

      return numbers.map((numbers)=>{
        return(
          <div key = {numbers} onClick = {()=>{this.setEquation(numbers)}} className="bb col-3 p0  turnBold bWW">
            <p className="cw bigText  text-center">{numbers}</p>
          </div>
        );

      });

    }

    render(){
      return(
        <div className="container">

          <div className="row p0">
            <input className="bb w100 pl20px bigText cw text-left h100px bWW" placeholder="0" value = {this.state.equation}/>
          </div>

          <div className="row p0">
              {this.renderNumbers()}
          </div>

        </div>
      );

    }

}
