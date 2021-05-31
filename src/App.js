import React from 'react';
import './App.css';
import Task2_ErrorBoundary from './Task2_errorBoundary';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isError: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      count: Math.round(Math.random() * 5)
    })
  }
  render() {
    if (this.state.count === 2) {
      this.setState({ isError: true})
    }
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Task2_ErrorBoundary>
      <Example/>
      </Task2_ErrorBoundary>
      
    </div>
  );
}

export default App;




