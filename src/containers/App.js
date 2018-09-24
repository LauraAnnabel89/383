import React, { Component } from "react";
import Tweets from "../components/Tweets";
import Instagram from "../components/Instagram";
import ManualMessage from "../components/ManualMessage";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  render() {
    let posts = this.state.posts;
    return (
      <div>
        <ManualMessage />
        <Instagram />
        <Tweets />
      </div>
    );
  }
}

export default App;
