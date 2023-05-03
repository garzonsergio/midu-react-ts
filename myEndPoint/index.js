const express = require("express");
const app = express();

const data = [
  {
    nick: "March",
    months: 3,
    profileUrl: "https://i.pravatar.cc/150?u=March",
    description: "single description",
  },
  {
    nick: "Saturn",
    months: 1,
    profileUrl: "https://i.pravatar.cc/150?u=Saturn",
    description: "galactic description",
  },
  {
    nick: "Twin",
    months: 7,
    profileUrl: "https://i.pravatar.cc/150?u=Twin",
    description: "double description",
  },
];

app.get("/data", (req, res) => {
  res.send(data);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
