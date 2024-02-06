const express = require('express');
const app = express();
const port = 3000;
app.get('/greet', (req, res) => {
  
  const name = req.query.name;
  if (name) {
    res.send(`Hello, ${name}!`);
  } else {
    
    res.send('Hello, Guest!');
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
