import { createFileRoute, Link, SearchSchemaInput } from "@tanstack/react-router";
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

type SearchParamsInput = Partial<{
  page: number;
  search: string;
  tags: string[];
}>;

export const Route = createFileRoute("/epics/$epicId/milestones/")({
  validateSearch(search: SearchParamsInput & SearchSchemaInput): SearchParams {
    return {
      page: Number(search.page ?? "1") ?? 1,
      search: (search.search as string) || "",
      tags: Array.isArray(search.tags) ? search.tags : [],
    };
  },
  component: ({}) => {
    const { epicId } = Route.useParams();
    const { page, search, tags } = Route.useSearch();

    return (
      <div className="flex flex-col gap-3 p-3">
        <div>Epic: {epicId}</div>
        <div>Search values in route</div>
        <pre>{JSON.stringify({ page, search, tags })}</pre>
        <div>Current search values</div>
        <MilestoneSearch />
        {milestones.map((milestone, idx) => {
          return (
            <div className="flex gap-2" key={idx}>
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
