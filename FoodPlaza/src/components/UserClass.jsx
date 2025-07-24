import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };
  }
  async componentDidMount() {
    let data = await fetch("https://api.github.com/users/honeybunnysidd");
    let json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { userInfo } = this.state;
    return (
      <>
        <div className="userCard">
          <img src={userInfo.avatar_url} alt="" />
          <h3>Name: {userInfo.name}</h3>
          <h4>Location: {userInfo.location} </h4>
          <h3>Followers: {userInfo.followers}</h3>
          <h4>Contact: {userInfo.blog}</h4>
        </div>
      </>
    );
  }
}

export default UserClass;
