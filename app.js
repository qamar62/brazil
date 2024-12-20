const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

// Initialize Next.js
const app = next({ dev });
const handle = app.getRequestHandler();

// Error logging
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
});

app.prepare()
  .then(() => {
    const server = express();

    // Health check endpoint
    server.get('/health', (req, res) => {
      res.status(200).send('OK');
    });

    // Handle all other routes with Next.js
    server.all('*', (req, res) => {
      return handle(req, res);
    });

    // Error handling middleware
    server.use((err, req, res, next) => {
      console.error('Server Error:', err);
      res.status(500).json({
        error: 'Internal Server Error',
        message: dev ? err.message : 'Something went wrong'
      });
    });

    server.listen(port, (err) => {
      if (err) {
        console.error('Failed to start server:', err);
        process.exit(1);
      }
      console.log(`> Ready on port ${port} [${process.env.NODE_ENV}]`);
    });
  })
  .catch((err) => {
    console.error('Failed to prepare Next.js:', err);
    process.exit(1);
  });
