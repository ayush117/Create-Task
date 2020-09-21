import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const CreateTask = () =>{
		var d = new Date();
		var n = d.toUTCString();
    	const [state, setState] = useState({
    		name: '',
    		priority: 'Low',
    		taskstatus: 'To do',
    		date: n
  		});

const [result, setResult] = useState(null);

const save = event => {
 	event.preventDefault();
 		axios
  		.post('/send', { ...state })
  		.then(response => {
    		setResult(response.data);
    			setState({ 
    				name: '',
    				priority: '',
    				duedate: '',
    				date: '',
    				taskstatus: '' 
    			});
    		})
  		    .catch(() => {
    			setResult({ 
    				success: false,
    				message: 'Something went wrong. Try again later'
    			});
			});
		function refreshPage() {
    		window.location.reload(false);
  		}
  		refreshPage();
	};


 const onInputChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };

 return (
    <div>
      <form onSubmit={save}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
          	required
            type="text"
            name="name"
            value={state.name}
            placeholder="Enter task name"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="priority">
          <Form.Label>Priority</Form.Label>
          <select name="priority" required value={state.value} onChange={onInputChange}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option> 
          </select>
        </Form.Group>
        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
          	required
            type="text"
            name="date"
            value={state.date}
            placeholder="Enter Date"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="duedate">
          <Form.Label>Due Date</Form.Label>
          <Form.Control
          	required
            type="date"
            name="duedate"
            value={state.message}
            placeholder="Enter your message"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="taskstatus">
          <Form.Label>Task Status</Form.Label>
          <Form.Control
          	required
          	defaultValue="To do"
            type="text"
            name="taskstatus"
            value={state.taskstatus}
            placeholder="Status"
            onChange={onInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};

export default CreateTask;