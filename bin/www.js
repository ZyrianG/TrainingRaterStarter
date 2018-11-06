const app = require('../app'); // identical to angular imports

const port = 3000;

app.set('port', port);
app.listen(port);