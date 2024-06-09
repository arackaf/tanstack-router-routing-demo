import React, { Suspense, useState } from "react";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../useData";

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <div className="p-2 flex gap-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{" "}
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
        </div>
        <hr />
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<p className="p-5 m-5 text-red-500">Loading ...</p>}>
            <Outlet />
          </Suspense>
        </QueryClientProvider>
        <TanStackRouterDevtools />
      </>
    );
  },
});
