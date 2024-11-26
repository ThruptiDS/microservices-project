 
const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
    res.send('Order Service is running!');
});

app.listen(port, () => {
    console.log(`Order service listening at http://localhost:${port}`);
});
