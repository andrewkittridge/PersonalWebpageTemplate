import type { VercelRequest, VercelResponse } from '@vercel/node';
import initServer from '../server/index';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  const app = await initServer();
  // Forward the request to the Express app
  return new Promise<void>((resolve) => {
    app(req, res);
    res.on('finish', resolve);
  });
} 