import React from 'react';
import './Order.css';

const Order = ({ id, name, description, price, img }) => {

  return (
    <section className="Order_section">
      <img src={img} alt={name}/>
      <div className="Order_section-div">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div>
        <h3>{price}</h3>
        <button>Remove from History</button>
      </div>
    </section>
  )
}

export default Order;