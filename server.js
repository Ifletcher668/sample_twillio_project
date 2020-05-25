const http = require("http");
const express = require("express");
const cors = require("cors");
const port = 1337;

const accountSid = require("./api_secrets").accountSid;
const authToken = require("./api_secrets").authToken;
const client = require("twilio")(accountSid, authToken);

const app = express();
app.use(
    cors(),
    express.json(),
    express.urlencoded({
        extended: true,
    })
);

app.post("/sms", (req, res) => {
    let randomFourDigitStringNumber = "";
    for (let i = 0; i < 4; i++) {
        randomFourDigitStringNumber += Math.floor(Math.random() * 10);
    }
    client.messages
        .create({
            body: `Your 4-digit code: ${randomFourDigitStringNumber}`,
            from: "+12083286691",
            to: req.body.phoneNumberInput,
        })
        .then((message) => console.log(message));
    res.send(randomFourDigitStringNumber);
});

http.createServer(app).listen(port, () =>
    console.log(`Express server listening on port ${port}`)
);
