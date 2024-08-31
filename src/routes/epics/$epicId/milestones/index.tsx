import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

const milestones = [
  { id: "1", name: "Milestone 1" },
  { id: "2", name: "Milestone 2" },
  { id: "3", name: "Milestone 3" },
];

export const Route = createFileRoute("/epics/$epicId/milestones/")({
  component: () => {
    const { epicId } = Route.useParams();

    return (
      <div>
        {milestones.map((milestone) => {
          return (
            <div className="flex gap-2">
              <span>Milestone {milestone.name}</span>
              <Link from={Route.to} to="$milestoneId" params={{ epicId, milestoneId: milestone.id }}>
                View
              </Link>
            </div>
          );
        })}
      </div>
    );
  },
});
