const http = require("http");
const express = require("express");
const twilio = require("twilio");
const MessagingResponse = twilio.twiml.MessagingResponse;
const port = 1337;
// console.log(MessagingResponse);
const app = express();

app.post("/sms", (req, res) => {
    const twiml = new MessagingResponse();

    twiml.message("The Robots are coming! Run for the hill. Run for your life");

    res.writeHead(200, { "content-Type": "text/xml" });
    res.end(twiml.toString());
});

http.createServer(app).listen(port, () =>
    console.log(`Express server listening on port ${port}`)
);
