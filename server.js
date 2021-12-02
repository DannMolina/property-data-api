// * import tools
const express = require('express');
const http = require('http');
const cors = require('cors');

// * serve to port
const PORT = process.env.PORT || 8000;

// * app router
const router = require('./router');

// * assign/call the express function
const app = express();

// * to json
app.use(express.json());

// * cross-origin resource sharing
// * allow server to indicate any origins (domain, scheme, or port)
app.use(cors());

// * create server
const server = http.createServer(app);

app.use(router);

// * error handler
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        success: false,
        message: error.message,
    });
});

// * start the server on port::
server.listen(PORT, () => console.log(`server running on port ${PORT}`));
