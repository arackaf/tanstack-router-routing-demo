import React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tasks/edit/$taskid")({
  component: () => <div>Edit task</div>,
});
