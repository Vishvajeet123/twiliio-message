require('dotenv').config();
// const twilio = require('twilio');

// const client = twilio(
//   process.env.TWILIO_ACCOUNT_SID,
//   process.env.TWILIO_AUTH_TOKEN
// );

// const sendSMS = async (to, message) => {
//   return await client.messages.create({
//     body: message,
//     from: process.env.TWILIO_PHONE_NUMBER,
//     to
//   });
// };

// module.exports = sendSMS;


// backend/utils/sendSMS.js
const twilio = require("twilio");

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const sendSMS = async (to, message) => {
  return client.messages.create({
    body: message,
    from: process.env.TWILIO_PHONE_NUMBER,
    to,
  });
};

module.exports = sendSMS;
