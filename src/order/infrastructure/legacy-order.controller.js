// const express = require('express');
// const app = express();
// const orders = [];

// app.use(express.json());

// app.post('/order', (req, res) => {
//   const { productId, quantity, userId } = req.body;
//   if (!productId || !quantity || !userId) {
//     return res.status(400).send('Invalid data');
//   }

//   const order = {
//     id: orders.length + 1,
//     productId,
//     quantity,
//     userId,
//   };

//   orders.push(order);
//   res.status(201).send(order);
// });

// app.get('/order/:id', (req, res) => {
//   const orderId = parseInt(req.params.id);
//   const order = orders.find((o) => o.id === orderId);

//   if (!order) {
//     return res.status(404).send('Order not found');
//   }

//   res.send(order);
// });

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });
