let { app, createServer } = require('./server.cjs');
const api = require('./api-modules/api.cjs');

// app = api.init(app);

// createServer(app);

createServer(api.init(app));