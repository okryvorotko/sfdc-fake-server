const express = require('express');
const fs = require('fs');
const app = express();
const accounts = fs.readFileSync('data/data-accounts.json');
const contacts = fs.readFileSync('data/data-contacts.json');

app.get('/api/sfdc/accounts', (req, res) => {
    res.json(JSON.parse(accounts.toString()));
});

app.post('/api/sfdc/accounts', (req, res) => {
    if (!req.body) return res.status(400).send({error: 'Body is undefined'});
    accounts.push(req.body);
    res.json(accounts.find(entry => entry.id === req.body.id));
});

app.get('/api/sfdc/contacts', (req, res) => {
    res.json(JSON.parse(contacts.toString()));
});

const port = 3000;
app.listen(port, () => {
    console.log(`Mock SFDC server is listening on port ${port}`);
});


