const path = require('path');
const express = require('express');
const app = express();
require('dotenv').config()

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));

var mongoose = require(‘mongoose’);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Create-task');

const { MongoClient, ObjectId} = require('mongodb')
const connectionURl = 'mongodb://127.0.0.1:27017'
const databaseName = 'Create-task'

// console.log("----------DB------------")

app.post('/send', (req, res) => {
  
  MongoClient.connect(connectionURl, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
	if (error) {
		return console.log("error rrr")
	}

	const db = client.db(databaseName)

	db.collection('tasks').insertOne({
		name: req.body.name,
    	priority: req.body.priority,
    	date: req.body.date,
    	duedate: req.body.duedate,
    	taskstatus: req.body.taskstatus 
	})
	})

  res.send(req.body);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});