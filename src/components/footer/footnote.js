import React from "react";

export default class Footnote extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      credits:[],
      info:null
    }

  }
  render(){

    return(
      <div className="container-fluid bb pt20px">


        <div className="row">
          <div className="col-1"/>
          <div className="col-2">
              <ul>
                  <li className="bold gr bigger none">Career</li>
                  <li className="none turnW gr">Resume</li>
                  <li className="none  turnW gr">Jobs</li>
                  <li className="none  turnW gr">Linkden</li>
              </ul>
          </div>

            <div className="col-2">
              <ul>
                  <li className="bold gr bigger none">Projects</li>
                  <li className="none turnW gr">Games</li>
                  <li className="none turnW gr">Apps</li>
                  <li className="none turnW gr">Other</li>
              </ul>
            </div>

            <div className="col-2">
              <ul>
                  <li className="bold  bigger gr none">Credits</li>
                  <li className="none turnW gr">Showcase</li>
                  <li className="none  turnW gr">Credit Doc</li>
                  <li className="none turnW gr">Disclaimer</li>
              </ul>
            </div>



            <div className="col-2"/>

            <div className="col-2">

            </div>

        </div>

        <br />

          <div>
              <p className="gr text-center mono">I do not own any of the images or backgrounds. this website is purely used for personal use nothing else </p>
          </div>

          <br />

        <div className="row pb10px">
          <div className="col-1"/>
          <div className="col-1 turnW gr">Legal</div>
          <div className="col-1 turnW gr">Credits</div>
          <div className="col-1 turnW gr">Cookies</div>
          <div className="col-1 turnW gr">Policy</div>
          <div className="col-1  turnW gr">Disclaimer</div>
          <div className="col-1 turnW gr">Other</div>

        </div>

      </div>
    )
  }
}
