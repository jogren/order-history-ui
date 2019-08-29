import React from 'react';
import './Order.css';

const Order = ({ id, name, description, price, img, deletePurchase }) => {

  return (
    <section className="Order_section">
      <div className="Order_div-image">
        <img src={img} alt={name}/>
      </div>
      <div className="Order_div-content">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className="Order_div-price">
        <h3>${price}</h3>
        <button className="Order_button" onClick={() => deletePurchase(id)}>Remove from History</button>
      </div>
    </section>
  )
}

export default Order;