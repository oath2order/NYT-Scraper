import React, { Component } from "react";
import API from "../utils/API";
import Results from "../components/Results";
import Jumbotron from "../components/Jumbotron";

class Home extends Component {
  // Setting the component's initial state
  state = {
    topic: "Trump",
    start: "2017",
    end: "2017",
    results: []
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // this.setState({
    // topic: this.topic.value,
    // start: this.startYear.value,
    // end: this.endYear.value
    // });

    console.log(this.state);
    API.getNewsArticles(
      this.state.topic,
      this.state.start,
      this.state.end
    ).then(res => this.setState({
        results: res.data.response.docs
     })
    );
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="container">
        <Jumbotron />
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              <strong>Query</strong>
            </h3>
          </div>
          <div className="panel-body">
            <form>
              <div className="form-group">
                <label htmlFor="topic">Topic</label>
                <input
                  className="form-control"
                  onChange={this.handleInputChange}
                  value={this.state.topic}
                  name="topic"
                  id="topic"
                  type="text"
                />
              </div>
              <div className="form-group">
                <label htmlFor="role-input">Start Year</label>
                <input
                  className="form-control"
                  onChange={this.handleInputChange}
                  value={this.state.start}
                  name="start"
                  id="startYear"
                  type="text"
                />
              </div>
              <div className="form-group">
                <label htmlFor="role-input">End Year</label>
                <input
                  className="form-control"
                  onChange={this.handleInputChange}
                  value={this.state.end}
                  name="end"
                  id="endYear"
                  type="text"
                />
              </div>
              <button
                className="btn btn-primary"
                onClick={this.handleFormSubmit}
                id="search-btn"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default Home;
