const express = require('express');
// App setup
const app = express();
const server = app.listen(3000, () => {
    console.log('Listening 3000');
});