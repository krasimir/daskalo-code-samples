const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.send(`
    <link href="styles.css" rel="stylesheet" />
  `)
})

app.listen(3000, () => {
  console.log('The server is running');
});