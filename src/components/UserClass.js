import React from "react";
import UserContext from "../utils/userContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, location, contact } = this.props;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="font-bold">User : {loggedInUser}</h1>
          )}
        </UserContext.Consumer>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
