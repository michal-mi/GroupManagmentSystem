import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(bodyParser.json({limit: "100mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "100mb", extended:true}));

//app.use(cors());


const CONNECTION_URL = 'mongodb+srv://admin:admin@cluster0.fhmbr.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () => 
console.log(`Connection is established and running on port: ${PORT}`)
)).catch((err) => console.log(err.message));

//mongoose.set('useFindAndModify',false);