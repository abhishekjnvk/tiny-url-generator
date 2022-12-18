const ls = require("./index");

ls.generate({
  url: "https://www.google.com",
  title: "Google",
  expiry: 0,
  analytics_password: "password",
})
  .then((res) => {
    console.log("Response", res);
  })
  .catch((err) => {
    console.log("Error", err);
  });
