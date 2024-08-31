import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/epics/$epicId/milestones/$milestoneId/edit")({
  component: () => {
    const { epicId, milestoneId } = Route.useParams();
    return (
      <div className="p-3">
        Editing milestone {milestoneId} in Epic {epicId}
      </div>
    );
  },
});
