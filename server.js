const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri,{
    useUnifiedTopology:true,
    useNewUrlParser: true
});

const connection = mongoose.connection;
connection.once("open", () =>
console.log("mongodb connection sucessfull")
);

const articlesRouter = require('./routes/articles');
app.use('/articles', articlesRouter);



app.listen(port, () => console.log(`The app is running on the Port: ${port}`));