import React from "react";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useData } from "../useData";

export const Route = createFileRoute("/")({
  component: Index,
  loader: async () => {
    console.log("INDEX LOADER");
    await new Promise((res) => setTimeout(res, 1500));
    return { b: Math.random() };
  },
  staleTime: 15000,
  gcTime: 15000,
});

function Index() {
  const { data } = useData();
  const loaderData = Route.useLoaderData();

  return (
    <div className="p-2">
      <h3 className="text-red-500">Welcome Home!</h3>
      <p>{JSON.stringify(data ?? {})}</p>
      <p>{JSON.stringify(loaderData ?? {})}</p>
    </div>
  );
}
