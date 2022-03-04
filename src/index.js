const express = require('express');

const app = express();

require('./mongodb');

app.use(require('./routes/index.routes'));

app.listen(3000);
console.log('Server en el puerto 3000');




