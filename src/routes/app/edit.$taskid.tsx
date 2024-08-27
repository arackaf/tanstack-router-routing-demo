import React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/edit/$taskid")({
  component: () => <div>Edit task</div>,
});
