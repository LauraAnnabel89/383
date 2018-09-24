import React, { Component } from "react";
// import "./App.css";

class ManualMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      manualMessage: []
    };
  }

  componentDidMount() {
    fetch("http://private-cc77e-aff.apiary-mock.com/posts")
      .then(d => d.json())
      .then((d, id) => {
        let manualMessage = d.items.map(post => {
          return post.item_data;
        });
        this.setState({ manualMessage: manualMessage });
      });
  }

  render() {
    let manualMessage = this.state.manualMessage;
    console.log(manualMessage);
    return (
      <div>
        <div>
          {manualMessage.map(p => (
            <div key={p.item_id}>
              <h1>MANUAL MESSAGE</h1>
              <img src="http://fillmurray.com/300/200" />
              <li>{p.text}</li>
              <a href={p.link}>{p.link_text}</a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ManualMessage;
