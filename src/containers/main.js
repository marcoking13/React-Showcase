import React from 'react';
import faker from "faker";
import update from 'immutability-helper';
import YTSearch from "youtube-api-search";
import _ from "lodash";
import axios from "axios";

import "./../css/main.css";
import "./../css/utility.css";

import Calculator from "./../components/calculator/calculator.js";

import Comment from "./../components/comments/comments.js";
import CommentBox from "./../components/comments/comment_box.js";

import CountdownDisplay from "./../components/countdown/countdown_display.js";
import CountdownSet from "./../components/countdown/countdown_set.js";

import Characters from "./../config/characters.js";
import CharacterSelection from "./../components/character_selection/character_selection.js";
import CurrentCharacter from "./../components/character_selection/current_character.js";

import GoogleMaps from "./../components/google_maps/google_maps.js";

import ImageSearch from "./../components/image_search/image_search.js";
import ImageResults from "./../components/image_search/image_results.js";

import ToDoList from "./../components/to_do_list/to_do_list.js";
import ToDo from "./../components/to_do_list/to_do.js";

import Trippy from "./../components/trippy/trippy.js";

import VideoSearch from "./../components/video/video_search.js";
import VideoDetail from "./../components/video/video_detail.js";
import VideoList from "./../components/video/video_list.js";

import GooglePage from "./../components/google_maps/google_page.js";

import Footer from "./../components/footer/footnote.js";

const api_key = "AIzaSyAsDpdAN9gA2TJl_Vi5nHMcyn2fNqWhF94";


class Main extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      commentCurrent:"",
      imageTerm:"",
      images:[],
      comments:[
        "Nice Job!"
      ],
      characters:Characters,
      currentCharacter:null,
      toDo:[{item:"Go to the Store",important:false}],
      currentToDo:null,
      currentVid:null,
      vids:[],
      vidTerm:"",
      minutes:10,
      seconds:55
    }

    this.addComment = this.addComment.bind(this);
    this.setComment = this.setComment.bind(this);
    this.setDo = this.setDo.bind(this);
    this.setVidTerm = this.setVidTerm.bind(this);
    this.addDo = this.addDo.bind(this);
    this.setCharacter = this.setCharacter.bind(this);
    this.setImageTerm = this.setImageTerm.bind(this);
    this.SetImages = this.SetImages.bind(this);
    this.videoSearch = this.videoSearch.bind(this);
    this.PlayVideo = this.PlayVideo.bind(this);
    this.CountDown = this.CountDown.bind(this);
    this.ResetCountDown = this.ResetCountDown.bind(this);
    this.changeMinutes = this.changeMinutes.bind(this);
    this.changeSeconds = this.changeSeconds.bind(this);

    this.ImageSearch = this.ImageSearch.bind(this);
    this.removeObjFromTodo = this.removeObjFromTodo.bind(this);

    this.videoSearch("Mario");
    this.ImageSearch("Night");

  }

  videoSearch(term){
    YTSearch({key:api_key,term:term},((videos)=>{

      this.setState({
          vids:videos,
          currentVid:videos[0]
        });

    }));

  }

  CountDown(){
    var counter = 0;

      this.countdownInterval = setInterval(()=>{

        if(this.state.seconds <= 0 && this.state.minutes > 0){
          this.setState({
            seconds:59,
            minutes: this.state.minutes - 1
          });
        }

        else if(this.state.seconds <= 0 && this.state.minutes <= 0){
            clearInterval(this.countdownInterval);
            this.setState({
              seconds:0,
              minutes: 0
            });
        }

        else{
          this.setState({
            seconds:this.state.seconds -1,
            minutes: this.state.minutes
          });

        }

      },1000);

  }

  StopCountDown(){
    clearInterval(this.countdownInterval);
  }

  ResetCountDown(){
    clearInterval(this.countdownInterval);
    this.setState({minutes:0,seconds:0});
  }

  changeMinutes(min){
    this.setState({minutes:min})
  }

  changeSeconds(sec){
    this.setState({seconds:sec})
  }

  setVidTerm(term){
    this.setState({vidTerm:term});
  }

  PlayVideo(vid){
    this.setState({currentVid:vid});
  }

  ImageSearch(image){
    axios.get("http://api.unsplash.com/search/photos?client_id=1627e05b4b3b25cefb92519e0f303950a2c1d3f11087abf755a286fc2e36eafa"+"&query="+image)
    .then((r)=>{
      this.setState({images:r.data.results});
    });
  }

  setImageTerm(e){
    var term = e.target.value;
    this.setState({imageTerm:term});
  }

  SetImages(images){
    this.setState({images:images});
  }

  setCharacter(currentCharacter){
    this.setState({currentCharacter:currentCharacter})
  }

  removeObjFromTodo(obj) {

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
    this.setState({commentCurrent:comment});
  }

  addComment(comment){
    this.setState({ comments: [...this.state.comments, comment] })
  }

  addDo(newDo){
    this.setState({ toDo: [...this.state.toDo, newDo] })
  }

  render(){

      return (
        <div className="container-fluid">

          <div className="bBord w100 changeB">
            <h2 className="text-center c34 f70px Lato mt5 ml5 c45 text-center  mt2_5 ">React Showcase</h2>
              <Trippy />
            </div>

            <br />

            <div className="bBord pb25px">
                <h1 className="cw text-center mt2_5">Character Selection</h1>
                <CharacterSelection characters = {this.state.characters} setCharacter = {this.setCharacter} />
                <br />
                <CurrentCharacter currentCharacter = {this.state.currentCharacter} />
            </div>

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
              <h1 className="cw text-center mt2_5">Image Search</h1>
                <ImageSearch ImageSearch = {this.ImageSearch} setImageTerm = {this.setImageTerm} imageTerm = {this.state.imageTerm}/>
                <ImageResults images = {this.state.images} />
            </div>

            <div className="bBord pb25px">
              <h1 className="cw text-center mt2_5">Countdown</h1>
              <CountdownDisplay  StopCountDown = {this.StopCountDown} changeMinutes = {this.changeMinutes} minutes = {this.state.minutes} seconds = {this.state.seconds} changeSeconds = {this.changeSeconds} />
              <CountdownSet CountDown = {this.CountDown}  StopCountDown = {this.ResetCountDown}/>
            </div>

            <div className="bBord pb25px">
              <h1 className="cw text-center mt2_5">Calculator</h1>
              <Calculator />
            </div>

            <div className="bBord pb25px">
              <h1 className="cw text-center mt2_5">Google Maps</h1>
              <GooglePage />
            </div>

            <div className="bBord pb25px">
              <h1 className="cw mt2_5 text-center">Comment Section</h1>
              <br />
              <div className="row">
                {this.renderComments()}
              </div>
              <CommentBox commentCurrent = {this.state.commentCurrent} addComment = {this.addComment} setComment = {this.setComment} />
            </div>
            <Footer />
        </div>
      );

    }

}

export default Main;
