import React from "react";
import { createFileRoute, createLazyFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useData } from "../useData";

export const Route = createFileRoute("/")({
  component: Index,
  loader: () => {
    console.log("INDEX LOADER");
    return 12;
  },
});

function Index() {
  const { data } = useData();
  return (
    <div className="p-2">
      <h3 className="text-red-500">Welcome Home!</h3>
      <p>{JSON.stringify(data ?? {})}</p>
    </div>
  );
}
