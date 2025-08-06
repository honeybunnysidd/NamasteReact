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
      <div className="w-full flex flex-wrap px-40 py-10 bg-sky-100 gap-10 justify-start">
        <div className="basis-[200px] p-4 rounded-xl shadow bg-white">
          <p>Home - 1</p>
          <p>About</p>
          <p>Contact</p>
          <p>Cart</p>
        </div>
        <div className="basis-[200px] p-4 rounded-xl shadow bg-white">
          <p>Home - 2</p>
          <p>About</p>
          <p>Contact</p>
          <p>Cart</p>
        </div>
        <div className="basis-[200px] p-4 rounded-xl shadow bg-white">
          <p>Home - 3</p>
          <p>About</p>
          <p>Contact</p>
          <p>Cart</p>
        </div>
        <div className="basis-[200px] p-4 rounded-xl shadow bg-white">
          <p>Home - 4</p>
          <p>About</p>
          <p>Contact</p>
          <p>Cart</p>
        </div>
        <div className="basis-[200px] p-4 rounded-xl shadow bg-white">
          <p>Home - 5</p>
          <p>About</p>
          <p>Contact</p>
          <p>Cart</p>
        </div>
        <div className="basis-[200px] p-4 rounded-xl shadow bg-white">
          <p>Home - 6</p>
          <p>About</p>
          <p>Contact</p>
          <p>Cart</p>
        </div>
        <div className="basis-[200px] p-4 rounded-xl shadow bg-white">
          <p>Home - 7</p>
          <p>About</p>
          <p>Contact</p>
          <p>Cart</p>
        </div>
        <div className="basis-[200px] p-4 rounded-xl shadow bg-white">
          <p>Home - 8</p>
          <p>About</p>
          <p>Contact</p>
          <p>Cart</p>
        </div>
        <div className="basis-[200px] p-4 rounded-xl shadow bg-white">
          <p>Home - 9</p>
          <p>About</p>
          <p>Contact</p>
          <p>Cart</p>
        </div>

        {/* <h2>I am About</h2>
        <UserClass name={"Siddhartha"} location={"Meerut"} /> */}
      </div>
    );
  }
}

export default About;
