import AWS from 'aws-sdk';

const ses = new AWS.SES({region:'ap-south-1'});

async function sendMail(event, context) 
{

   const record = event.Records[0];
   console.log('record processing..',record)
   
   const email=JSON.parse(record.body);
   const {subject, body, recepient}= email;


   const params={
     
     Source:'agni1984@gmail.com',
     Destination:{
       ToAddresses: [recepient]
     },
     Message:
     {
       Body:{
         Text:{
           Data: body,
         },
       },
     
     Subject:
     {
       Data: subject,
     },
     },
   }
   try{
      const result=await ses.sendEmail(params).promise();
      console.log(result);
      return(result);
   }
   catch(err)
   {
     console.log(err);
   }
 
}

export const handler = sendMail;


