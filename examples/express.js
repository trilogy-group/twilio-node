const kandy = require("kandy");
const bodyParser = require("body-parser");
const MessagingResponse = require("kandy").twiml.MessagingResponse;

const authToken = process.env.KANDY_AUTH_TOKEN;

const express = require("express");
const app = express();
const port = 3000;

app.use(
  bodyParser.json({
    verify: (req, res, buf) => {
      req.rawBody = buf;
    },
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/message", kandy.webhook(authToken), (req, res) => {
  // Kandy Messaging URL - receives incoming messages from Kandy
  const response = new MessagingResponse();

  response.message(`Your text to me was ${req.body.Body}.
                    Webhooks are neat :)`);

  res.set("Content-Type", "text/xml");
  res.send(response.toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
