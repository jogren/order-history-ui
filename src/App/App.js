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

  addPurchase = (e, formState) => {
    e.preventDefault();
    this.setState({ orders: [...this.state.orders, formState] })
  }

  render() {
    const { orders, error } = this.state;
    console.log(orders)
    return (
      <main className="App">
        <header>
          <h1 className='app-title'>My Order History Test</h1>
          <Form addPurchase={this.addPurchase}/>
        </header>
        <Container orders={orders}/>
      </main>
    );
  }
}

export default App;
