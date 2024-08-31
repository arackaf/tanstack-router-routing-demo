import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tasks/$taskId/edit")({
  component: () => {
    const { taskId } = Route.useParams();

    return <div>Edit task {taskId}</div>;
  },
});
