import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter, parseSearchWith, stringifySearchWith } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

function customSerialize(input: Record<string, any>): string {
  const trimmed = Object.fromEntries(
    Object.entries(input).filter(([_k, val]) => {
      return !(val === "" || (Array.isArray(val) && val.length === 0));
    })
  );

  console.log({ input: JSON.stringify(input), trimmed: JSON.stringify(trimmed) });

  return JSON.stringify(trimmed);
}

// Create a new router instance
const router = createRouter({ routeTree, parseSearch: parseSearchWith(JSON.parse), stringifySearch: stringifySearchWith(customSerialize) });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
