import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/tasks/")({
  component: Index,
});

function Index() {
  const tasks = [
    { id: "1", title: "Task 1" },
    { id: "2", title: "Task 2" },
    { id: "3", title: "Task 3" },
  ];

  return (
    <div className="p-2">
      <h3 className="text-red-500">Tasks page!</h3>
      <div className="flex flex-col gap-2">
        {tasks.map((t, idx) => (
          <div key={idx} className="flex gap-3">
            <div>{t.title}</div>
            <Link to="/epics/edit/$edpicId" params={{ edpicId: t.id }}>
              Edit
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
