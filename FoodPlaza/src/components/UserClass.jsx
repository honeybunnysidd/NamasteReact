import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <>
        <div className="userCard">
          <h2>Count = {count}</h2>
          <button onClick={() => this.setState({ count: count + 1 })}>
            Count++
          </button>

          <h3>Name: {name}</h3>
          <h4>Location:{location} </h4>
          <h4>Contact: </h4>
        </div>
      </>
    );
  }
}

export default UserClass;
