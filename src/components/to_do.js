import React from "react";



class ToDo extends React.Component {

  render(){
    return(
      <div className="row">
        <div className="col-3"/>
        <div className="col-6">
          <form>
            <input className="inputComment center w100" value = {this.props.currentToDo} placeholder= " What to do?"
              onChange = {
                (e)=>{
                  this.props.setDo(e.target.value);
                }}
            />
            <button
            onClick = {
              (event)=>{
                event.preventDefault();this.props.addDo({item:this.props.currentToDo,important:true})
              }}className="submit o"></button>
          </form>
        </div>
      </div>
    )
  }
}



export default ToDo;
