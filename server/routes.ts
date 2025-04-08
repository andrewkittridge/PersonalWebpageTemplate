import { Express } from 'express';

export function registerRoutes(app: Express) {
  // API routes can be defined here
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });
}