import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      img: '',
      price: '',
      id: Date.now()
    }
  }

  updateInputState = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <form>
        <input 
          type="text"
          placeholder="Image URL"
          name="img"
          value={this.state.img}
          onChange={(e) => this.updateInputState(e)}
        />
        <input 
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={(e) => this.updateInputState(e)}
        />
        <input 
          type="text"
          placeholder="Description"
          name="description"
          value={this.state.description}
          onChange={(e) => this.updateInputState(e)}
        />
        <input 
          type="text"
          placeholder="Price"
          name="price"
          value={this.state.price}
          onChange={(e) => this.updateInputState(e)}
        />
        <button className="Form_button" onClick={(e) => this.props.addPurchase(e, this.state)}>Add Purchase</button>
      </form>
    )
  }
}

export default Form;