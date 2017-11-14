import React from "react";
import API from "../utils/API";

class Results extends React.Component {
  state = {
    key: "",
    title: "",
    web_url: "",
    snippet: "",
    pubdate: ""
  };

  saveToDatabase = (id, url, headline, snip, pubdate) => {
    console.log(id)
    API.saveArticles({
      key: id,
      title: headline,
      web_url: url,
      snippet: snip,
      pubdate: pubdate
    });
  };

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">
            <strong>Results</strong>
          </h3>
        </div>
        <div className="panel-body">
          <ul className="list-group">
            {this.props.results.map(result => (
              <li className="list-group-item" key={result._id}>
                <h3>
                  <a href={result.web_url} target="_blank">
                    {result.headline.main}
                  </a>
                </h3>
                <p>{result.snippet}</p>
                <p>Date Published: {result.pub_date}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => this.saveToDatabase(
                    result._id,
                    result.web_url,
                    result.headline.main,
                    result.snippet,
                    result.pub_date
                  )}
                >
                  Save
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default Results;
