const express = require("express");
const app = express();

app.listen(8000, () => {
  console.log("listening on 8000");
});

app.get("/pet", (req, res) => {
  res.send("펫 용품을 쇼핑할 수 있는 페이지입니다.");
});

app.get("/beauty", (req, res) => {
  res.send("뷰티 용품을 쇼핑할 수 있는 페이지입니다.");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/main.html"); // __dirname == 현제 디렉토리 위치
});
