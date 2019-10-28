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
                      <div className="row">
                        <div className="col-3">
                              <h3 className="bigText cw text-center">{this.props.currentCharacter.name}</h3>
                        </div>
                        <div className="col-6">
                          <img className="characterImageMoving w50  ml25" src= {"images/"+this.props.currentCharacter.image+".gif"} />
                        </div>
                        <div className="col-3"/>
                      </div>

                        <br />
                        <div className="row">
                          <div className="col-3"/>
                          <div className="col-3">
                            <h2 className="cw text-center">{"Attack: "+ this.props.currentCharacter.attack}</h2>
                          </div>
                          <div className="col-3">
                            <h2 className="cw text-center">{"Health: "+this.props.currentCharacter.health}</h2>
                          </div>
                        </div>
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
