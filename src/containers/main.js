
import React from 'react';
import faker from "faker";
import update from 'immutability-helper';
import YTSearch from "youtube-api-search";
import _ from "lodash";


import "./../css/main.css";
import "./../css/utility.css";

import Characters from "./../config/characters.js";

import Trippy from "./../components/trippy.js";
import Comment from "./../components/comments.js";
import CommentBox from "./../components/comment_box.js";
import CharacterSelection from "./../components/character_selection.js";
import CurrentCharacter from "./../components/current_character.js";
import GoogleMaps from "./../components/google_maps.js";
import ToDoList from "./../components/to_do_list.js";
import ToDo from "./../components/to_do.js";
import VideoSearch from "./../components/video_search.js";
import VideoDetail from "./../components/video_detail.js";
import VideoList from "./../components/video_list.js";
const api_key = "AIzaSyAsDpdAN9gA2TJl_Vi5nHMcyn2fNqWhF94";





class  Main extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      commentCurrent:"",
      comments:[
        "Nice Job!"
      ],
      characters:Characters,
      currentCharacter:null,
      toDo:[{item:"Go to the Store",important:false}],
      currentToDo:null,
      currentVid:null,
      vids:[],
      vidTerm:""
    }

    this.addComment = this.addComment.bind(this);
    this.setComment = this.setComment.bind(this);
    this.setDo = this.setDo.bind(this);
    this.setVidTerm = this.setVidTerm.bind(this);
    this.addDo = this.addDo.bind(this);
    this.setCharacter = this.setCharacter.bind(this);
    this.videoSearch = this.videoSearch.bind(this);
    this.PlayVideo = this.PlayVideo.bind(this);
    this.removeObjFromTodo = this.removeObjFromTodo.bind(this);

    this.videoSearch("Mario");
  }


  videoSearch(term){
    YTSearch({key:api_key,term:term},((videos)=>{
      this.setState({
          vids:videos,
          currentVid:videos[0]
        });

    }))
  }

  setVidTerm(term){
    this.setState({vidTerm:term});
  }

  PlayVideo(vid){
    this.setState({currentVid:vid});
  }

  setCharacter(currentCharacter){
      this.setState({currentCharacter:currentCharacter})
  }

  removeObjFromTodo(obj) {
    console.log(obj);
    this.setState({toDo: this.state.toDo.filter(function(nObj) {
        return nObj !== obj
    })});
  }



  setDo(todo){
    this.setState({currentToDo:todo})
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

  addDo(newDo){
      this.setState({ toDo: [...this.state.toDo, newDo] })
  }

  render(){

    console.log(this.state.vids);

      return (
        <div className="container-fluid " >
          <div className="bBord w100 changeB">
            <h2 className="title c45 text-center  mt2_5 ">React Showcase</h2>

              <Trippy />
            </div>
            <br />

            <div className="bBord mt2_5 pb50px">
                <h1 className="cw text-center mt2_5">Youtube Search</h1>
                <VideoSearch videoSearch = {this.videoSearch} vidTerm = {this.state.vidTerm} setVidTerm = {this.setVidTerm} />
                <VideoDetail vid = {this.state.currentVid} />
                <VideoList  PlayVideo = {this.PlayVideo} vids = {this.state.vids} />
            </div>

            <div className="bBord pb25px">
                <h1 className="cw text-center mt2_5">To-Do List</h1>
                <ToDoList  removeObjFromTodo = {this.removeObjFromTodo} toDo = {this.state.toDo}/>
                  <br />
                <ToDo  removeObjFromTodo = {this.removeObjFromTodo} addDo = {this.addDo} setDo = {this.setDo} currentToDo = {this.state.currentToDo} />
            </div>

            <div className="bBord pb25px">
              <h1 className="cw text-center mt2_5">Character Selection</h1>
              <CharacterSelection characters = {this.state.characters} setCharacter = {this.setCharacter} />
                <br />
              <CurrentCharacter currentCharacter = {this.state.currentCharacter} />
            </div>




            <div className="bBord pb25px">
                <h1 className="cw mt2_5 text-center">Comment Section</h1>
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
