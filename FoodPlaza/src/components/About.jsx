import UserCard from "./UserCard";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Parent Render");
    return (
      <div className="about-container">
        <h2>I am About</h2>
        <UserClass name={"Siddhartha"} location={"Meerut"} />
      </div>
    );
  }
}

export default About;
