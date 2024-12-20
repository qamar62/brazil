const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Error logging
process.on('uncaughtException', function(err) {
  console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', function(err) {
  console.error('Unhandled Rejection:', err);
});

app.prepare()
  .then(function() {
    const server = express();

    // Health check endpoint
    server.get('/health', function(req, res) {
      res.status(200).send('OK');
    });

    // Handle all other routes with Next.js
    server.all('*', function(req, res) {
      return handle(req, res);
    });

    // Error handling middleware
    server.use(function(err, req, res, next) {
      console.error('Server Error:', err);
      res.status(500).send('Internal Server Error');
    });

    // Start server
    const port = process.env.PORT || 3000;
    server.listen(port, function(err) {
      if (err) {
        console.error('Failed to start server:', err);
        process.exit(1);
      }
      console.log('> Ready on port', port);
    });
  })
  .catch(function(err) {
    console.error('Failed to prepare Next.js:', err);
    process.exit(1);
  });
