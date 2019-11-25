import React from "react";
import axios from "axios";

export default class CharacterSelection extends React.Component {

  renderCharacters(){
      return this.props.characters.map((character)=>{
          return(
            <div className="col-2 characterBox mt5 bBB posRel pb50px"
              onClick = {()=>{
                  this.props.setCharacter(character);
                }
              }
              >
              <img className="characterImg w100" src = {"./../images/"+character.image+".png"} />
              <h3 className="characterName  cw  text-center">{character.name}</h3>
            </div>
          )
        });
      }

    render(){

      return(
        <div className="row">
            <div className="col-3"/>
            {this.renderCharacters()}
        </div>
      );
    }
}
