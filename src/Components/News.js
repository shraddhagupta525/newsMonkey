import React, { Component } from "react";

export default class News extends Component {
  render() {
    let { title, description } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src="..." alt="....." />
          <div className="card-body">
            <h5 className="card-body">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    );
  }
}
