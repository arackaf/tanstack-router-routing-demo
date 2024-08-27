import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/app/tasks")({
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
  const tasks = [
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
    { id: 3, title: "Task 3" },
  ];

  return (
    <div className="p-2">
      <h3 className="text-red-500">Tasks!</h3>
      <div className="flex flex-col gap-2">
        {tasks.map((t) => (
          <div className="flex gap-3">
            <div>{t.title}</div>
            <Link to={`/app/edit/${t.id}`}>Edit</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
