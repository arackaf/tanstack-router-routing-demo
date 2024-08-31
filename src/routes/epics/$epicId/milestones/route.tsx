import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/epics/$epicId/milestones")({
  component: () => (
    <div className="p-3">
      Milestones layout <Outlet />
    </div>
  ),
});
