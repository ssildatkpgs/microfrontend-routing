const express = require('express');
const router = express();
const port = process.env.PORT || 3000;

router.use(express.static(__dirname + '/public'));

router.get('/', (req, res) => {
  res.sendFile('home.html', {
    root: 'pages'
  });
});

router.get('/lista', (req, res) => {
  res.sendFile('list.html', {
    root: 'pages'
  });
});

router.get('/lista/:id', (req, res) => {
  res.sendFile('item.html', {
    root: 'pages'
  });
});

router.listen(port, () => console.log(`App listening on port: ${port}`))
