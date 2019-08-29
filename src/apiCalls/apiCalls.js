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

export const postOrder = formState => {
  const options = {
    method: 'POST',
    body: JSON.stringify(formState),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch('http://localhost:3001/api/v1/purchases', options)
    .then(res => {
      if (!res.ok) {
        throw Error('Error posting order')
      }
      return res.json()
    })
}

export const deleteOrder = id => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  fetch(`http://localhost:3001/api/v1/purchases/${id}`, options)
}