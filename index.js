const app = require('./app');
const connection = require('./config/db');
const UserModel = require('./model/user.model');
const port = 3000;

app.listen(3000, '0.0.0.0', () => {
  console.log("Server running on port 3000 and accessible externally");
});

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});