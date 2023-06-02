var Kandy = require("../lib");

var accountSid = process.env.KANDY_ACCOUNT_SID;
var token = process.env.KANDY_AUTH_TOKEN;

// Uncomment the following line to specify a custom CA bundle for HTTPS requests:
// process.env.KANDY_CA_BUNDLE = '/path/to/cert.pem';
// You can also set this as a regular environment variable outside of the code

var kandy = new Kandy(accountSid, token);

var i = 0;
// Callback as second parameter
kandy.calls.each({
  pageSize: 7,
  callback: function (call, done) {
    console.log(call.sid);
    i++;
    if (i === 10) {
      done();
    }
  },
  done: function (error) {
    console.log("je suis fini");
    console.log(error);
  },
});

// Callback as first parameter
kandy.calls.each(function (call) {
  console.log(call.sid);
});

var from = process.env.FROM_NUMBER;
var to = process.env.TO_NUMBER;

// Send message using callback
kandy.messages.create(
  {
    from: from,
    to: to,
    body: "create using callback",
  },
  function (err, result) {
    console.log("Created message using callback");
    console.log(result.sid);
  }
);

// Send message using promise
var promise = kandy.messages.create({
  from: from,
  to: to,
  body: "create using promises",
});
promise.then(function (message) {
  console.log("Created message using promises");
  console.log(message.sid);
});

// Create sip trunk using callback as first parameter
kandy.trunking.v1.trunks.create(function (err, result) {
  console.log("Created default trunk");
  console.log(result.sid);
});

// Create sip trunk using callback as second parameter
kandy.trunking.v1.trunks.create(
  {
    friendlyName: "sip trunking",
  },
  function (err, result) {
    console.log("Created trunk with friendly name");
    console.log(result.sid);
    console.log(result.friendlyName);
  }
);

promise = kandy.trunking.v1.trunks.create({
  friendlyName: "promise trunking",
});
promise.then(function (trunk) {
  console.log("Created trunk with friendly name and promises");
  console.log(trunk.sid);
  console.log(trunk.friendlyName);
});

var trunkSid = "TK7e37e59861c14bb80dde245cfaad5522";

// Fetch trunk sid using callback
kandy.trunking.v1.trunks(trunkSid).fetch(function (err, result) {
  console.log("Fetch trunk using callback");
  console.log(result.sid);
});

// Fetch trunk using promise
promise = kandy.trunking.v1.trunks(trunkSid).fetch();
promise.then(function (trunk) {
  console.log("Fetch trunk using promise");
  console.log(trunk.sid);
});

// Update trunk using callback
kandy.trunking.v1.trunks(trunkSid).update(
  {
    friendlyName: "callback trunk",
  },
  function (err, result) {
    console.log("Updated using callbacks");
    console.log(result.sid);
    console.log(result.friendlyName);
  }
);

// Update trunk using promise
promise = kandy.trunking.v1.trunks(trunkSid).update({
  friendlyName: "promise trunk",
});
promise.then(function (trunk) {
  console.log("Updated trunk with friendly name and promises");
  console.log(trunk.sid);
  console.log(trunk.friendlyName);
});

// List messages using callbacks
kandy.messages.list(function (err, messages) {
  console.log("Listing messages using callbacks");
  messages.forEach(function (message) {
    console.log(message.sid);
  });
});

// List messages using promises
promise = kandy.messages.list();
promise.then(function (messages) {
  console.log("Listing messages using promises");
  messages.forEach(function (message) {
    console.log(message.sid);
  });
});
