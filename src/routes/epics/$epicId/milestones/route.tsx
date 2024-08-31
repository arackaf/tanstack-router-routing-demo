import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/epics/$epicId/milestones")({
  component: () => (
    <div>
      Milestones layout <Outlet />
    </div>
  ),
});
