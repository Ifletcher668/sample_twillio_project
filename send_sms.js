const accountSid = "AC9d047f1545bfccb3956d0e8d9918fc81";
const authToken = "2c669500a6a29d7a0130c77c7288ecaa";
const client = require("twilio")(accountSid, authToken);

client.messages
    .create({
        body: "Hello",
        from: "+12083286691",
        to: "+12088916705",
    })
    .then((message) => console.log(message.sid));
