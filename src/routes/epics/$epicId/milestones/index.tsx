import { createFileRoute, Link } from "@tanstack/react-router";
import { MilestoneSearch } from "../../../../app/MilestoneSearch";

const milestones = [
  { id: "1", name: "Milestone 1" },
  { id: "2", name: "Milestone 2" },
  { id: "3", name: "Milestone 3" },
];

type SearchParams = {
  page: number;
  search: string;
  tags: string[];
};

export const Route = createFileRoute("/epics/$epicId/milestones/")({
  validateSearch(search: Record<string, unknown>): SearchParams {
    return {
      page: Number(search.page ?? "1") ?? 1,
      search: (search.page as string) || "",
      tags: [],
    };
  },
  component: () => {
    const { epicId } = Route.useParams();
    const { page, search, tags } = Route.useSearch();

    return (
      <div className="flex flex-col gap-3 p-3">
        <div>Epic: {epicId}</div>
        <div>Current search values</div>
        <MilestoneSearch />
        <pre>{JSON.stringify({ page, search, tags })}</pre>
        {milestones.map((milestone) => {
          return (
            <div className="flex gap-2">
              <span>{milestone.name}</span>
              <Link from={Route.to} to="$milestoneId" params={{ epicId, milestoneId: milestone.id }}>
                View
              </Link>
              <Link from={Route.to} to="$milestoneId/edit" params={{ epicId, milestoneId: milestone.id }}>
                Edit
              </Link>
            </div>
          );
        })}
      </div>
    );
  },
});
