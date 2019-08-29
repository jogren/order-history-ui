import React from 'react';
import './Order.css';

const Order = ({ id, name, description, price, img, deletePurchase }) => {

  return (
    <section className="Order_section">
      <img src={img} alt={name}/>
      <div className="Order_section-div">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div>
        <h3>{price}</h3>
        <button onClick={() => deletePurchase(id)}>Remove from History</button>
      </div>
    </section>
  )
}

export default Order;