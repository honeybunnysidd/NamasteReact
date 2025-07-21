import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, location } = this.props;
    return (
      <>
        <div className="userCard">
          <h3>Name: {name}</h3>
          <h4>Location:{location} </h4>
          <h4>Contact: </h4>
        </div>
      </>
    );
  }
}

export default UserClass;
