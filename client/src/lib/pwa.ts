// PWA utilities for service worker registration and management

export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

let deferredPrompt: BeforeInstallPromptEvent | null = null;

// Register service worker
export function registerServiceWorker(): Promise<ServiceWorkerRegistration | null> {
  if ('serviceWorker' in navigator) {
    return navigator.serviceWorker
      .register('/sw.js', { scope: '/' })
      .then((registration) => {
        console.log('[PWA] Service worker registered:', registration);

        // Handle updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content is available, notify user
                showUpdateNotification();
              }
            });
          }
        });

        return registration;
      })
      .catch((error) => {
        console.error('[PWA] Service worker registration failed:', error);
        return null;
      });
  }

  return Promise.resolve(null);
}

// Handle PWA install prompt
export function setupInstallPrompt(): void {
  window.addEventListener('beforeinstallprompt', (e) => {
    console.log('[PWA] Before install prompt fired');
    e.preventDefault();
    deferredPrompt = e as BeforeInstallPromptEvent;

    // Dispatch custom event for components to listen to
    window.dispatchEvent(new CustomEvent('pwa-installable', {
      detail: { prompt: deferredPrompt }
    }));
  });

  window.addEventListener('appinstalled', () => {
    console.log('[PWA] App installed successfully');
    deferredPrompt = null;

    // Dispatch custom event
    window.dispatchEvent(new CustomEvent('pwa-installed'));
  });
}

// Trigger install prompt
export async function triggerInstallPrompt(): Promise<boolean> {
  if (!deferredPrompt) {
    console.warn('[PWA] No install prompt available');
    return false;
  }

  try {
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    console.log('[PWA] User choice:', outcome);
    deferredPrompt = null;

    return outcome === 'accepted';
  } catch (error) {
    console.error('[PWA] Error triggering install prompt:', error);
    return false;
  }
}

// Check if PWA is installable
export function isInstallable(): boolean {
  return deferredPrompt !== null;
}

// Check if app is running as PWA
export function isRunningAsPWA(): boolean {
  return window.matchMedia('(display-mode: standalone)').matches ||
         (window.navigator as any).standalone === true;
}

// Show update notification
function showUpdateNotification(): void {
  // Create a simple notification banner
  const notification = document.createElement('div');
  notification.className = 'fixed top-4 right-4 z-50 bg-primary text-primary-foreground px-4 py-3 rounded-lg shadow-lg max-w-sm';
  notification.innerHTML = `
    <div class="flex items-center justify-between">
      <div>
        <p class="font-medium">Update Available</p>
        <p class="text-sm opacity-90">A new version is ready to install.</p>
      </div>
      <div class="flex gap-2 ml-4">
        <button class="text-sm underline hover:no-underline" onclick="window.location.reload()">
          Refresh
        </button>
        <button class="text-sm underline hover:no-underline" onclick="this.parentElement.parentElement.parentElement.remove()">
          Dismiss
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(notification);

  // Auto-remove after 10 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 10000);
}

// Get PWA display mode
export function getPWADisplayMode(): string {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
  const isMinimalUI = window.matchMedia('(display-mode: minimal-ui)').matches;
  const isBrowser = window.matchMedia('(display-mode: browser)').matches;

  if (isStandalone) return 'standalone';
  if (isMinimalUI) return 'minimal-ui';
  if (isBrowser) return 'browser';
  return 'unknown';
}

// Initialize PWA features
export function initPWA(): void {
  console.log('[PWA] Initializing PWA features');

  // Register service worker
  registerServiceWorker();

  // Setup install prompt handling
  setupInstallPrompt();

  // Log current display mode
  console.log('[PWA] Display mode:', getPWADisplayMode());
  console.log('[PWA] Running as PWA:', isRunningAsPWA());
}
