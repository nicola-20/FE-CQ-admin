import React, { Component } from "react";
import ImageUpload from "./ImageUpload";
import * as api from "../api";
import axios from "axios";

class UpdateChallenge extends Component {
  state = {
    challengeType: "",
    question: "",
    answer: "",
    picture: "",
    selectedFile: null,
    loaded: 0,
    URL: ""
  };

  render() {
    return (
      <main>
        {console.log(this.state.picture)}
        <h2>{this.props.challengeId}</h2> <br /> <br />
        <form onSubmit={this.handleSubmit}>
          <select value={this.state.challengeType} onChange={this.handleChange}>
            <option>Choose Challenge Type</option>
            <option value="question"> Question </option>
            <option value="image-recognition"> Image Recognition </option>
          </select>{" "}
          <br /> <br />
          {this.state.challengeType === "question" ? (
            <div>
              <input
                placeholder="question "
                value={this.state.value}
                name="question"
                onChange={this.handleInputChange}
              />
              <br />

              <input
                placeholder="answer "
                value={this.state.value}
                name="answer"
                onChange={this.handleInputChange}
              />
            </div>
          ) : this.state.challengeType === "image-recognition" ? (
            <div>{<ImageUpload setURL={this.setURL} />}</div>
          ) : (
            <div />
          )}
          <button>Update</button>
        </form>
      </main>
    );
  }

  setURL = url => {
    this.setState({ URL: url });
  };

  handleChange = event => {
    this.setState({ challengeType: event.target.value });
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onDrop = picture => {
    console.log(picture[0], "this is your file");
    this.setState({ picture: picture[0] });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { picture } = this.state;
    const { challengeId, username } = this.props;
    api.updateChallenge(challengeId, username);
  };
}

export default UpdateChallenge;
