import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      orders: [],
      error: ''
    }

  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/purchases')
      .then(res => res.json())
      .then(data => this.setState({ orders: data }))
      .catch(error => this.setState({ error: 'There was a problem fetching your data.' }))
  }

  render() {
    const { orders, error } = this.state;
    console.log(orders)
    console.log(error)
    return (
      <div className="App">
        <header>
          <h1 className='app-title'>My Order History Test</h1>
          <div className='purchase-form'>

          </div>
        </header>
        <div className='purchase-container'>

        </div>
      </div>
    );
  }
}

export default App;
