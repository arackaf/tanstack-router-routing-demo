import React from "react";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/app")({
  component: () => (
    <div>
      App layout <Outlet />
    </div>
  ),
});
