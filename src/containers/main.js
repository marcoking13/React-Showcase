import React from 'react';
import faker from "faker";

import "./../css/main.css";
import "./../css/utility.css"

import  Trippy from "./../components/trippy.js";
import Comment from "./../components/comments.js";
import CommentBox from "./../components/comment_box.js";
import CharacterSelection from "./../components/character_selection.js";
import CurrentCharacter from "./../components/current_character.js";

class  Main extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      commentCurrent:"",
      comments:[
        "Nice Job!"
      ],
      characters:[
        {
          name:"Larry",
          image:"avatar1",
          attack:5,
          health:9,
          details:null
        },
        {
          name:"Lemmy",
          image:"avatar2",
          attack:3,
          health:20,
          details:null
        },
        {
          name:"Ludwig",
          image:"avatar3",
          attack:13,
          health:5,
          details:null
        }

      ],
      currentCharacter:null
    }

    this.addComment = this.addComment.bind(this);
    this.setComment = this.setComment.bind(this);
    this.setCharacter = this.setCharacter.bind(this);
  }

  setCharacter(currentCharacter){
      this.setState({currentCharacter:currentCharacter})
  }

  renderComments(){
    return this.state.comments.map((comment)=>{
      return <Comment name = {faker.name.firstName()} avatar = {faker.image.avatar()} comment = {comment}/>
    });
  }

  setComment(comment){
    console.log(comment);
    this.setState({commentCurrent:comment});
  }

  addComment(comment){
    this.setState({ comments: [...this.state.comments, comment] })
  }

  render(){

      return (
        <div className="container-fluid " >
          <h2 className="title  c45 text-center  mt2_5 ">React Showcase</h2>
            <div className="bBord bb w100">
              <Trippy />
            </div>
            <br />

            <div className="bBord pb25px">
              <CharacterSelection characters = {this.state.characters} setCharacter = {this.setCharacter} />
                <br />
              <CurrentCharacter currentCharacter = {this.state.currentCharacter} />
            </div>

            <div className="bBord pb25px">
                <br />
              <div className="row ">
                {this.renderComments()}
              </div>
              <CommentBox commentCurrent = {this.state.commentCurrent} addComment = {this.addComment} setComment = {this.setComment} />
            </div>



        </div>
      );
    }
}

export default Main;
