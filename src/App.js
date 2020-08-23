import React, {Component} from 'react';
import './App.css';
import AddFormContainer from './containers/AddFormContainer'
import TableContainer from './containers/TableContainer'
class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>
          API
        </h1>
        <AddFormContainer/>
        <TableContainer/>
      </div>
    );
  }
}

export default App;
