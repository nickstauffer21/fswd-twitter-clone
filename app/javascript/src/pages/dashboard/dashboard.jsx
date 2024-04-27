import React, { Component } from "react";
import ReactDOM from "react-dom";
import { handleErrors, safeCredentials, jsonHeader } from "@utils/fetchHelper";

class Dashboard extends Component {
  constructor(props) {
    super();
    this.state = {
      username: null,
      error: null,
      message: "",
      tweets: [],
      image: {
        file: null,
        src: null,
      },
    };
  }

  componentDidMount() {
    fetch("/api/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ username: data.username });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        this.setState({ error: error.message });
      });
  }

  render() {
    const { username, error } = this.state;

    if (error) {
      console.log(error);
    }

    return (
      <div>
        <h1>Welcome, {username}</h1>
      </div>
    );
  }
}

export default Dashboard;
