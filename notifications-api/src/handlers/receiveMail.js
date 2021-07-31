import AWS from 'aws-sdk';

const ses = new AWS.SES({region:'ap-south-1'});

async function receiveMail(event, context) 
{

  console.log("Event......",event);
   const record = event.Records[0];
   console.log('record processing..',record)
   
   const {subject, body, recipient}=JSON.parse(record.body);


   const params={
     
     Source:'agni1984@gmail.com',
     Destination:{
       ToAddresses: recipient
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

export const handler = receiveMail;


