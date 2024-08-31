import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/epics/$epicId/")({
  component: () => {
    const { epicId } = Route.useParams();

    return (
      <div className="flex flex-col gap-3 p-3">
        <div>Viewing epic {epicId}</div>
        <Link to="/epics/$epicId/milestones" params={{ epicId }}>
          View milestones
        </Link>
      </div>
    );
  },
});
