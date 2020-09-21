import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import CreateTask from './components/createtask';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-6 offset-md-3">
          <Header />
          <CreateTask />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));