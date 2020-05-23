const http = require("http");
const express = require("express");
const twilio = require("twilio");
const MessagingResponse = twilio.twiml.MessagingResponse;

const accountSid = require("./api_secrets").accountSid;
const authToken = require("./api_secrets").authToken;

const client = require("twilio")(accountSid, authToken);
const cors = require("cors");
const port = 1337;
const app = express();
app.use(
    cors(),
    express.json(),
    express.urlencoded({
        extended: true,
    })
);

app.post("/sms", (req, res) => {
    const twiml = new MessagingResponse();
    console.log("request");
    console.log(req.body.phoneNumberInput);

    let fourDigitNumber = "";
    for (let i = 0; i < 4; i++) {
        fourDigitNumber += Math.floor(Math.random() * 10);
    }

    client.messages
        .create({
            body: `Your 4-digit code: ${fourDigitNumber}`,
            from: "+12083286691",
            to: req.body.phoneNumberInput,
        })
        .then((message) => console.log(message.sid));

    // twiml.message();
    res.send(fourDigitNumber);
    res.writeHead(200, { "content-Type": "text/xml" });
    res.end(twiml.toString());
});

app.get("/sms", (req, res) => {});

http.createServer(app).listen(port, () =>
    console.log(`Express server listening on port ${port}`)
);

// const AllRoutes = require("./server/routes/productManager.routes");

// AllRoutes(app);
