import { v4 as uuid } from 'uuid';
import AWS from 'aws-sdk';
import createError from 'http-errors';
import commonMiddleware from '../lib/commonMiddleware';
const sqs = new AWS.SQS();

const dynamodb=new AWS.DynamoDB.DocumentClient();

async function sendMail(event, context){

    const {subject,body,recipient}=event.body;

    const now=new Date();
  

    const msg={
        id:uuid(),
        subject,
        body,
        recipient,
        sendAt:now.toISOString(),  

    };
    try{

    console.log(`send message to ${process.env.MAIL_QUEUE_URL}`);
    
    await dynamodb.put({
        TableName: process.env.MESSAGES_TABLE_NAME,
        Item: msg
    }).promise();
    await sqs.sendMessage({
        QueueUrl: process.env.MAIL_QUEUE_URL,
        MessageBody: JSON.stringify({
            subject,
            recipient,
            body
        }),
    }).promise();
    }

   
    catch(err)
    {
        console.log(err);
        throw new createError.InternalServerError(error);
    }
    return{
        statusCode:201,
        body: JSON.stringify(msg),
    };



}

export const handler = commonMiddleware(sendMail);
