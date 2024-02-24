// index.js
const express = require('express');
const connectToMongo = require('./db');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

async function startServer() {
    await connectToMongo(); // Wait for MongoDB connection
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}

startServer();
