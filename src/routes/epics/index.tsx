import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/epics/")({
  component: Index,
});

function Index() {
  const epics = [
    { id: 1, title: "Epic 1" },
    { id: 2, title: "Epic 2" },
    { id: 3, title: "Epic 3" },
  ];

  return (
    <div className="p-2">
      <h3 className="text-red-500">Epics page!</h3>
      <div className="flex flex-col gap-2">
        {epics.map((t, idx) => (
          <div key={idx} className="flex gap-3">
            <div>{t.title}</div>
            <Link to={`/epics/edit/${t.id}`}>Edit</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
