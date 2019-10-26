import React from "react";



class ToDoList extends React.Component {
  renderList(){
    var listOrder = 1;
    var html = [];
    var blue;
    if(this.props.toDo){

      return this.props.toDo.map((toDo)=>{

          return(
            <li className={"list-group-item mt2_5 "+blue}>

              <div className="row">

                <div className="col-6">
                    <h3 className="ml5">{toDo.item}</h3>
                  </div>

                  <div className="col-3"/>

                  <div className="col-1">
                    
                  </div>
                  <div className="col-1">
                    <img className="w100 "  onClick  = {()=>{
                      this.props.removeObjFromTodo(toDo);
                    }}src = "images/x.png"/>
                  </div>




                </div>

              </li>
        );

      });

    }
  }

  render(){
    return(
      <div className="row">
        <div className="col-3"/>
        <div className="col-6">
            {this.renderList()}
        </div>
      </div>
    )
  }
}



export default ToDoList;
