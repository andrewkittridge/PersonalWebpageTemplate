import type { VercelRequest, VercelResponse } from '@vercel/node';
import app from '../server/index';

// Simplified handler that uses the Express app directly
export default function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  return new Promise<void>((resolve) => {
    // Forward the request to the Express app
    app(req, res);
    res.on('finish', resolve);
  });
} 