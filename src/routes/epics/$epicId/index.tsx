import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/epics/$epicId/")({
  component: () => {
    const { epicId } = Route.useParams();

    return (
      <div>
        Viewing epic {epicId}
        <Link from={Route.fullPath} to="./milestones">
          View milestones
        </Link>
      </div>
    );
  },
});
