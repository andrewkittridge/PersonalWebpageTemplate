import express from "express";
import { createServer } from "http";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic } from "./vite";
import { Request, Response, NextFunction } from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Error handler middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
  console.error(err);
});

// Initialize server
async function initServer() {
  registerRoutes(app);
  const server = createServer(app);
  
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  
  // Use PORT from environment variables (for Vercel) or fallback to 5000
  const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000;
  
  // Only start the server if not in production (Vercel uses serverless)
  if (process.env.NODE_ENV !== "production") {
    server.listen(PORT, () => {
      const formattedTime = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      });
      console.log(`${formattedTime} [express] serving on port ${PORT}`);
    });
  }
  
  return app;
}

// For local development
if (process.env.NODE_ENV !== "production") {
  (async () => {
    await initServer();
  })();
}

// Export for Vercel serverless function
export default initServer;
