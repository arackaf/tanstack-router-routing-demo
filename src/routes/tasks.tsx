import React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tasks")({
  component: Index,
  loader: async () => {
    console.log("TASKS LOADER");
    await new Promise((res) => setTimeout(res, 1500));
    return { b: Math.random() };
  },
  staleTime: 15000,
  gcTime: 15000,
});

function Index() {
  const loaderData = Route.useLoaderData();

  return (
    <div className="p-2">
      <h3 className="text-red-500">Tasks!</h3>
      <p>{JSON.stringify(loaderData ?? {})}</p>
    </div>
  );
}
