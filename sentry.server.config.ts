// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

console.log('[sentry.server.config.ts] Initializing Sentry server SDK, DSN:', process.env.NEXT_SENTRY_DSN ? 'SET' : 'NOT SET');

Sentry.init({
  dsn: process.env.NEXT_SENTRY_DSN,

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Enable logs to be sent to Sentry
  enableLogs: true,

  // Enable sending user PII (Personally Identifiable Information)
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
  sendDefaultPii: true,

  // Enable debug mode
  debug: true,
});

console.log('[sentry.server.config.ts] Sentry server SDK initialized');
