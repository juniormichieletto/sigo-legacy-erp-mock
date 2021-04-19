const express = require('express')
const app = express()
const port = 8080

app.get('/api/production-followup', (req, res) => {
  res.send({ todo: 
      [
        { productId: 1, quantity: Math.floor((Math.random() * 1000) + 1) },
        { productId: 2, quantity: Math.floor((Math.random() * 500) + 1) },
        { productId: 3, quantity: Math.floor((Math.random() * 100) + 1) },
      ],
      inProgress: [
        { productId: 1, quantity: Math.floor((Math.random() * 500) + 1) },
        { productId: 2, quantity: Math.floor((Math.random() * 100) + 1) },
        { productId: 3, quantity: Math.floor((Math.random() * 10) + 1) },
      ],
      delivering: [
        { productId: 2, quantity: Math.floor((Math.random() * 10) + 1) },
        { productId: 3, quantity: Math.floor((Math.random() * 500) + 1) },
        { productId: 5, quantity: Math.floor((Math.random() * 1000) + 1) },
      ]
    }
  )
});

app.get('/api/products', (req, res) => {
  res.send([
    { productId: 1, quantity: 'Camisa branca lisa para customização' },
    { productId: 2, quantity: 'Calça Jeans' },
    { productId: 3, quantity: 'Tecido antimicrobiano' },
    { productId: 4, quantity: 'Tecido ecológico' },
    { productId: 5, quantity: 'Couro sintético' },
  ])
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
