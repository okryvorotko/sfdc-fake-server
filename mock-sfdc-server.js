const express = require('express');
const fs = require('fs');
const app = express();
const accounts = fs.readFileSync('data/data-accounts.json');
const contacts = fs.readFileSync('data/data-contacts.json');

app.get('/api/sfdc/accounts', (req, res) => {
    res.json(JSON.parse(accounts.toString()));
});

app.get('/api/sfdc/contacts', (req, res) => {
    res.json(JSON.parse(contacts.toString()));
});

const port = 3000;
app.listen(port, () => {
    console.log(`Mock SFDC server is listening on port ${port}`);
});


