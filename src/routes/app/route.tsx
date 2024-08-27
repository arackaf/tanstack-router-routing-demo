import React from "react";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/app")({
  async beforeLoad() {
    console.log("App before load start");
    await new Promise((res) => setTimeout(res, 1000));
    return {
      d: Math.random(),
    };
  },
  loader: async ({}) => {
    console.log("TASKS LAYOUT LOADER");
    //await new Promise((res) => setTimeout(res, 2000));
    return { c: Math.random() };
  },
  staleTime: 15000,
  gcTime: 15000,
  component: () => (
    <div>
      App layout <Outlet />
    </div>
  ),
});
