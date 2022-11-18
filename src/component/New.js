import React, { Component } from "react";


export class New extends Component {
  constructor() {
    super();
    console.log("Constructor");
  }
 componentDidMount() {
   console.log("Componenet")
  }
  render() {
    console.log("Render");
    return <div>New</div>;
  }
}

export default New;
