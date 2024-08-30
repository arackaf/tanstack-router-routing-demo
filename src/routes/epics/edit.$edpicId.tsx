import React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/epics/edit/$edpicId")({
  component: () => {
    const x = Route.useParams();

    return <div>Edit epic {JSON.stringify(x)}</div>;
  },
});
