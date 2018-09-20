const AWS = require('aws-sdk')
AWS.config.update({ region: 'us-west-2' })
const sqs = new AWS.SQS()
const uuidv1 = require('uuid/v1')
const randomId = uuidv1()

const params = {
  MessageAttributes: {
    'Id': {
      DataType: 'String',
      StringValue: randomId
    }
  },
  MessageBody: randomId,
  QueueUrl: 'https://sqs.us-west-2.amazonaws.com/810028704317/awsmockery-queue'
}

const createMessage = (callback) => {
  sqs.sendMessage(params, function (err, data) {
    if (err) {
      console.log('Error', err)
      callback(err)
    } else {
      console.log('Success', data)
      callback(data)
    }
  })
}

module.exports = {
  createMessage: createMessage
}
