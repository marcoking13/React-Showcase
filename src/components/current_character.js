import React from "react";


class CurrentCharacter extends React.Component{
  render(){
    if(this.props.currentCharacter){
      return(
        <div className="row">
          <div className="col-3"/>

          <div className="col-6">
              <div className="row">
                  <div className="col-1"/>

                  <div className="col-10 blB pb25px">
                      <img className="characterImageMoving w50 ml25" src= {"images/"+this.props.currentCharacter.image+".gif"} />
                      <h5 className="subNameCharacter cw text-center">{this.props.currentCharacter.name}</h5>
                      <p className="cw text-center">{"Attack: "+ this.props.currentCharacter.attack}</p>
                      <p className="cw text-center">{"Health: "+this.props.currentCharacter.health}</p>
                  </div>

                </div>

              </div>

          </div>
    );

  }else{
    return <div />
  }

  }
}



export default CurrentCharacter;
