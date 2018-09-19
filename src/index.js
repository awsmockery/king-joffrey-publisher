const AWS = require('aws-sdk')
AWS.config.update({region: 'us-west-2'})
const uuidv1 = require('uuid/v1');
const randomId = uuidv1();

const sqs = new AWS.SQS()
const params = {
 MessageAttributes: {
   "Id": {
     DataType: "String",
     StringValue: randomId
   }
 },
 MessageBody: randomId,
 QueueUrl: "https://sqs.us-west-2.amazonaws.com/810028704317/awsmockery-queue"
};

sqs.sendMessage(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
