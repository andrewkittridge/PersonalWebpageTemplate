import express from "express";
import { createServer } from "http";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic } from "./vite";
import { Request, Response, NextFunction } from "express";

// Create app outside of any function so it can be exported directly
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Register routes
registerRoutes(app);

// Error handler middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  console.error("Error:", err);
  res.status(status).json({ message });
});

// Initialize server - only used for local development
async function initServer() {
  const server = createServer(app);
  
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    try {
      serveStatic(app);
    } catch (error) {
      console.error("Static file serving error:", error);
    }
  }
  
  // Use PORT from environment variables or fallback to 5000
  const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000;
  
  // Only start the server if we're not in Vercel's serverless environment
  if (process.env.NODE_ENV !== "production" || !process.env.VERCEL) {
    try {
      server.listen(PORT, () => {
        const formattedTime = new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true
        });
        console.log(`${formattedTime} [express] serving on port ${PORT}`);
      });
    } catch (error) {
      console.error("Server error:", error);
    }
  }
  
  return app;
}

// For local development
if (!process.env.VERCEL) {
  (async () => {
    try {
      await initServer();
    } catch (error) {
      console.error("Failed to initialize server:", error);
    }
  })();
}

// For Vercel serverless environment
export default app;
