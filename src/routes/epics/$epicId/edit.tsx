import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/epics/$epicId/edit")({
  component: () => <div>Hello /epics/$epicId/edit!</div>,
});
