const path = require('path');
const express = require('express');
const app = express();

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));

const { MongoClient, ObjectId} = require('mongodb')

const connectionURl = 'mongodb://127.0.0.1:27017'
const databaseName = 'Create-task'

console.log("----------DB------------")

app.post('/send', (req, res) => {
  console.log(req.body);
  
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


app.listen(3030, () => {
  console.log('server start on port 3030');
});