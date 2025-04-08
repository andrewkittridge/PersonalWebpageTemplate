import { track } from '@vercel/analytics';

/**
 * Track custom events in your application
 * @param eventName The name of the event to track
 * @param properties Optional properties to include with the event
 */
export function trackEvent(eventName: string, properties?: Record<string, string | number | boolean>) {
  try {
    track(eventName, properties);
  } catch (error) {
    // Silently handle errors in development or if analytics fails
    if (process.env.NODE_ENV === 'development') {
      console.log(`Analytics event tracked: ${eventName}`, properties);
    }
  }
}

/**
 * Page view tracking helper
 * @param pageName The name of the page being viewed
 */
export function trackPageView(pageName: string) {
  trackEvent('page_view', { page: pageName });
}

/**
 * Track user interaction with components
 * @param componentName The name of the component
 * @param action The action performed
 * @param label Optional label for additional context
 */
export function trackInteraction(componentName: string, action: string, label?: string) {
  trackEvent('interaction', {
    component: componentName,
    action: action,
    ...(label && { label })
  });
} 