import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/tasks/$taskId/edit")({
  component: () => {
    const { taskId } = Route.useParams();

    return (
      <div className="flex flex-col gap-3 p-3">
        <div>
          <Link to="/tasks">Back</Link>
        </div>
        <div>Edit task {taskId}</div>
      </div>
    );
  },
});
