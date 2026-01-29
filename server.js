const cors = require(`cors`);
const express = require('express');
const productsRouter = require(`./products`);
const app = express();


const port = 3000;

app.use(cors({
  origin: ['http://127.0.0.1:5500', 'http://localhost:5500']
}));

app.use(express.json());

app.use(`/products`, productsRouter);

app.get('/', (req, res) => {
  res.send('Hello World from express!');
});

app.get('/about', (req, res) => {
  res.send('About Us');
});

app.get(`/contact`, (req, res) => {
  res.send(`Contact us`);
});



app.get(`/message`, (req, res) => {
  res.json({
    message: `Hello from Express backend!`,
    text: `Hi from text not message key`
  })
});

app.post(`/message`, (req, res) => {
  const { name, message } = req.body;

  console.log(`New Message: `, name, message);
  res.json({ message: `Thank you for the message` });
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


