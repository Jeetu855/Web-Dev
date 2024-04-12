const express = require("express");

const app = express(); // like creatin entire hospital, each route is like a room where specific operation is performed
port = 3000;

/* Analogy : Doctor, doctor is single threaded
Tell patient to get medicine and tend to other patients in the mean time,patient comes back with medicine and waits in waiting area
Doctors are similar to JS threads, they expose their skills to the world through clinics and hospitals
Similarly we expose our websites to the world using HTTP servers
Express is one of many frameworks that lets us create an http server, sort of like how doctors create hospitals
*/

const calcSum = function (n) {
  let ans = 0;
  for (i = 0; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
};

app.get("/", (req, res) => {
  // this callback executed whenever someone visits the webpage
  const n = req.query.n;
  const ans = calcSum(n);
  res.send(`Your answer is ${ans}`);
});

app.listen(port, () => {
  //like address of hospital
  console.log(`Listening on port ${port}`);
});
