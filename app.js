const express = require('express');
const connectDB = require('./config/db');

const routes = require('./routes/api/books');

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));

routes(app);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
