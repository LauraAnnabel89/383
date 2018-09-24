import React, { Component } from "react";
// import "./App.css";

class Instagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instaPosts: []
    };
  }

  componentDidMount() {
    fetch("http://private-cc77e-aff.apiary-mock.com/posts")
      .then(d => d.json())
      .then((d, id) => {
        let instaPosts = d.items.map(post => {
          return post.item_data.image;
        });
        this.setState({ instaPosts: instaPosts });
      });
  }

  render() {
    let instaPosts = this.state.instaPosts;
    console.log(instaPosts.thumb);
    return (
      <div>
        <div>
          {instaPosts.map(p => (
            <div>
              <h1>Instagram</h1>
              <img src={p} />
              {/* <li>{p.text}</li>
              <a href={p.link}>{p.link_text}</a> */}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Instagram;
