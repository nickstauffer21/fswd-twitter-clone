import React from "react";
import { safeCredentials, handleErrors } from "@src/utils/fetchHelper";

class Tweets extends React.Component {
  state = {
    tweet: "",
    username: "",
  };

  userTweet = () => {
    fetch(
      "api/tweets",
      safeCredentials({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tweet: this.state.tweet,
          username: this.state.username,
        }),
      })
    ).then((response) => {
      if (!response.ok) {
        throw new Error("Network response not ok");
      }
    });
  };
}

export default Tweets;
