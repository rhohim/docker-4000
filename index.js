const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Node Server is running. Yay!! 🌟 - 4000');
});

app.listen(4000, () => {
    console.log('App is listening on port 4000');
});