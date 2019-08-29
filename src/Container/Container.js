import React from 'react';
import Order from '../Order/Order';
import './Container.css';

const Container = ({ orders }) => {
  let ordersList = orders.map(order => {
    return <Order key={order.id} id={order.id} description={order.description} img={order.img} name={order.name} price={order.price} />
  })
  return (
    <section className="Container_section">
      {ordersList}
    </section>
  )

}

export default Container;