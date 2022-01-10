const express = require('express')
const cors = require('cors')
const app = express();


app.use(cors());
const port=5000;

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

app.listen(port, () => console.log(`Server is running on port ${port} `));
