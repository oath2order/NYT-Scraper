import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";

class Saved extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.loadSaved();
  }

  loadSaved = () => {
    API.getDatabase()
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadSaved())
      .catch(err => console.log(err));
  };

  render() {
    return <div className="container">
        <Jumbotron />
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              <strong>Results</strong>
            </h3>
          </div>
          <div className="panel-body">
            <ul className="list-group">
              {this.state.articles.map(result => (
                <li className="list-group-item" key={result._id}>
                  <h3>
                    <a href={result.web_url} target="_blank">
                      {result.title}
                    </a>
                  </h3>
                  <p>{result.snippet}</p>
                  <p>Date Published: {result.pubdate}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.deleteArticle(result._id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>;
  }
}

export default Saved;
