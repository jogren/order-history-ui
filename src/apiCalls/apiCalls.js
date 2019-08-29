export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/purchases')
    .then(res => res.json())
}