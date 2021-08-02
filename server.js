const express = require('express');
const connectDB = require('./config/db');
var bodyParser = require('body-parser');
const app = express();


//connect database
connectDB();

//Init middleware
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('API Running'));

//Define routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/post', require('./routes/api/post'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));