import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/epics/$epicId/edit")({
  component: () => {
    const { epicId } = Route.useParams();
    return <div className="p-3">Edit epic {epicId}</div>;
  },
});
