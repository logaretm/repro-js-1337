"use client";

import { triggerServerActionError } from "./actions";

export default function ServerActionErrorPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Server Action Error Test</h1>

      <form action={triggerServerActionError}>
        <button
          type="submit"
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Trigger Server Action Error
        </button>
      </form>

      <p className="mt-4 text-gray-600">
        Click the button to trigger a server action that throws an error
      </p>
    </div>
  );
}

