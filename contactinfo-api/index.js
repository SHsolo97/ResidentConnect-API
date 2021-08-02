const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());
const contacts = {};

app.get('/api/contacts', (req, res) => {
    res.send(contacts);

});
app.post('/api/contacts/create',async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { type,name,phone } = req.body;
    contacts[id] = {
        id,type,name,phone
    }
  
    res.status(201).send(contacts[id]);
});
app.listen(4001, () => {

    console.log('Contact Info Service: Listening on 4001');
});