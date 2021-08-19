import React, { Component } from "react";

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { id: 1, txt: "First Task" },
        { id: 2, txt: "Second Task" },
        { id: 3, txt: "third Task" },
      ],
      currTask: "",
    };
  }

  handleChange = (e) => {
    let val = e.target.value;
    console.log(val);
    this.setState({
      currTask: val,
    });
  };

  handleSubmit = (e) => {
    let nta = [
      ...this.state.tasks,
      { id: this.state.tasks.length + 1, txt: this.state.currTask },
    ];
    this.setState({
        tasks: nta,
        currTask:''
    })


  };

  render() {
    return (
      <div>
        <div className="input-container">
          <input
            value={this.state.currTask}
            onChange={this.handleChange}
            type="text"
          ></input>
          <button onClick={this.handleSubmit}> Add </button>
        </div>
        <div className="class-list">
          <ul>
            {this.state.tasks.map(function (tobj) {
              return (
                <li>
                  <h1>{tobj.txt}</h1>
                  <button>Delete</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
