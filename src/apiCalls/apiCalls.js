export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/purchases')
    .then(res => {
      if(!res.ok) {
        throw Error('Error fetching your orders')
      }
      return res.json()
    }).catch(error => {
      throw Error(error.message)
    })

}