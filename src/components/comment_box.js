import React from "react";

class CommentBox extends React.Component {

  render(){
    return(
      <div className="row">
        <div className="col-3"/>

        <div className="col-6">
          <form>
            <input className="inputComment  center w100" value = {this.props.commentCurrent} placeholder= " Type a comment"
              onChange = {(e)=>{
                  this.props.setComment(e.target.value);
                }}
            />
            <button
            onClick = {
              (event)=>{
                event.preventDefault();this.props.addComment(this.props.commentCurrent)
              }}className="submit o"></button>
          </form>

        </div>

      </div>
    );

  }

}

export default CommentBox;
