import $ from "jquery";
import { useHistory } from "react-router-dom";
$.ajaxSetup({
  headers: {
    "X-CSRF-Token": $('meta[name="csrf-token"]').attr("content"),
  },
});

export var createUser = function (username, password, email) {
  return new Promise((resolve, reject) => {
    var request = {
      type: "POST",
      url: "api/users",
      xhrFields: {
        withCredentials: true,
      },
      data: {
        user: {
          username: username,
          password: password,
          email: email,
        },
      },
      success: function (response) {
        resolve(response);
      },
      error: function (error) {
        reject(error);
      },
    };
    $.ajax(request);
  });
};

export var signInUser = function (username, password) {
  var request = {
    type: "POST",
    url: "api/sessions",
    xhrFields: {
      withCredentials: true,
    },
    data: {
      user: {
        username: username,
        password: password,
      },
    },
    success: function (response) {
      console.log(response);
    },
  };
  $.ajax(request);
};

export var logoutUser = function () {
  var request = {
    type: "DELETE",
    url: "api/sessions",
    xhrFields: {
      withCredentials: true,
    },
    success: function (response) {
      console.log(response);
    },
  };
  $.ajax(request);
};

export var authenticate = function (history) {
  var request = {
    type: "GET",
    url: "api/authenticated",
    xhrFields: {
      withCredentials: true,
    },
    success: function (response) {
      if (response) {
        console.log(response);
      }
    },
    error: function (response) {
      console.log(response);
    },
  };
  $.ajax(request);
};

function postTweet(msg, image) {
  var formData = new FormData();
  formData.append("tweet[message]", msg);

  var request = {
    type: "POST",
    url: "api/tweets",
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    xhrFields: { withCredentials: true },
    success: function (response) {
      console.log(response);
    },
    error: function (request, error) {
      console.log(request);
      console.log(error);
    },
  };
  $.ajax(request);
}
