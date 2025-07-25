import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Switch, Route } from "wouter";
import "./index.css";
import { SWRConfig } from "swr";
import { fetcher } from "./lib/fetcher";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from '@vercel/analytics/react';
import Home from "./pages/Home";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <SWRConfig value={{ fetcher }}>
        <Switch>
          <Route path="/" component={Home} />
          <Route>404 Page Not Found</Route>
        </Switch>
        <Toaster />
        <Analytics />
      </SWRConfig>
    </ThemeProvider>
  </StrictMode>
);
