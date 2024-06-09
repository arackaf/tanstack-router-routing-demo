import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import {} from "@tanstack/react-query";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return <div className="p-2">Hello from About!</div>;
}
