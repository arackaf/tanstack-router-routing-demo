import React from "react";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/epics")({
  component: () => (
    <div>
      Epics layout <Outlet />
    </div>
  ),
});
