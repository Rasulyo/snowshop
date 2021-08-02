const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults({
  static: './build'
});
const PORT = process.env.PORT || 3000;
server.use(middlewares);
server.use(jsonServer.rewriter({
  '/api/*': '/$1',
}))
server.use(router);
if (process.env.NODE_ENV === 'production') {
  server.use(server.static('client/build'));
  server.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  server.get('/', (req, res) => {
    res.send("Api is running");
  })
}
server.listen(PORT, () => {
  console.log('Server is running');
});