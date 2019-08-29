import React, { Component } from 'react';
import Container from '../Container/Container';
import Form from '../Form/Form';
import { getOrders } from '../apiCalls/apiCalls';
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
    getOrders()
      .then(data => this.setState({ orders: data }))
      .catch(error => this.setState({ error: 'There was a problem fetching your data.' }))
  }

  render() {
    const { orders, error } = this.state;
    return (
      <main className="App">
        <header>
          <h1 className='app-title'>My Order History Test</h1>
          <div className='purchase-form'>
            <Form />
          </div>
        </header>
        <Container orders={orders}/>
      </main>
    );
  }
}

export default App;
