import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch("http://private-cc77e-aff.apiary-mock.com/posts")
      .then(d => d.json())
      .then((d, id) => {
        let posts = d.items.map(post => {
          this.setState({ posts: post });
        });
        console.log(this.state.posts);
      });
  }

  render() {
    let posts = this.state.posts;
    return (
      <ul>
        <div key={posts.item_id}>
          <h2>{posts.item_created}</h2>
          <p>{posts.item_source_id}</p>
        </div>
      </ul>
    );
  }
}

export default App;
