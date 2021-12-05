const PORT = 3000;
const app = require('./app');

//Start Server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});