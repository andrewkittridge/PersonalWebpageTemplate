import { Express } from 'express';

export function registerRoutes(app: Express) {
  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ 
      status: 'ok',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
      isVercel: !!process.env.VERCEL
    });
  });

  // Basic echo endpoint for testing
  app.post('/api/echo', (req, res) => {
    res.json({
      message: 'Echo response',
      body: req.body,
      timestamp: new Date().toISOString()
    });
  });
}