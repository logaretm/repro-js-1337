import * as Sentry from '@sentry/nextjs';

console.log('[instrumentation.ts] File loaded, NEXT_RUNTIME:', process.env.NEXT_RUNTIME);

export async function register() {
  console.log('[instrumentation.ts] register() called, NEXT_RUNTIME:', process.env.NEXT_RUNTIME);

  if (process.env.NEXT_RUNTIME === 'nodejs') {
    console.log('[instrumentation.ts] Loading sentry.server.config');
    await import('../sentry.server.config');
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    console.log('[instrumentation.ts] Loading sentry.edge.config');
    await import('../sentry.edge.config');
  }

  console.log('[instrumentation.ts] register() complete');
}

export const onRequestError: typeof Sentry.captureRequestError = (...args) => {
  console.log('[instrumentation.ts] onRequestError called with:', args[0]);
  return Sentry.captureRequestError(...args);
};
