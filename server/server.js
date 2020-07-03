const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');

connectDB();

app.use(cors());
app.use(express.json({ extended: false }));

//routing
const users = require('./routes/api/users');

//middleware
app.use('/api/users', users);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on port ${port}`));
