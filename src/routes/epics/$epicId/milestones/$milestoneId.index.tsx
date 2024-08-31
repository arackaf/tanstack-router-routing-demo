import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/epics/$epicId/milestones/$milestoneId/")({
  component: () => {
    const params = Route.useParams();
    const { epicId, milestoneId } = params;

    return (
      <div className="p-3">
        Viewing Milestone {milestoneId} in Epic {epicId}
      </div>
    );
  },
});
