import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Switch, Route } from "wouter";
import "./index.css";
import { SWRConfig } from "swr";
import { fetcher } from "./lib/fetcher";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from '@vercel/analytics/react';
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { initPWA } from "@/lib/pwa";
import PWAInstallPrompt from "@/components/PWAInstallPrompt";
import Home from "./pages/Home";

// Initialize PWA features
if (typeof window !== 'undefined') {
  initPWA();
}

// Error handler for error boundary
const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
  // In production, send to error reporting service
  console.error('Application Error:', error, errorInfo);

  // You could integrate with services like Sentry, LogRocket, etc.
  // Example: Sentry.captureException(error, { contexts: { react: errorInfo } });
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary
      onError={handleError}
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-destructive mb-4">
              Application Error
            </h1>
            <p className="text-muted-foreground mb-4">
              Something went wrong. Please refresh the page or try again later.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Refresh Page
            </button>
          </div>
        </div>
      }
    >
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <SWRConfig value={{ fetcher }}>
          <Switch>
            <Route path="/" component={Home} />
            <Route>
              <ErrorBoundary>
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
                    <p className="text-muted-foreground mb-8">Page not found</p>
                    <a
                      href="/"
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                    >
                      Go Home
                    </a>
                  </div>
                </div>
              </ErrorBoundary>
            </Route>
          </Switch>
          <Toaster />
          <PWAInstallPrompt />
          <Analytics />
        </SWRConfig>
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>
);
