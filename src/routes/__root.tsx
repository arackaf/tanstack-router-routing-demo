import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <div className="p-2 flex gap-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>
          <Link to="/tasks" className="[&.active]:font-bold">
            Tasks
          </Link>
        </div>
        <hr />
        <div className="p-3">
          <Outlet />
        </div>
      </>
    );
  },
});
