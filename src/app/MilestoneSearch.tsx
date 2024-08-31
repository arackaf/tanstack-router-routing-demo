import { getRouteApi } from "@tanstack/react-router";
import { FC } from "react";

const route = getRouteApi("/epics/$epicId/milestones/");

export const MilestoneSearch: FC<{}> = () => {
  const { epicId } = route.useParams();
  const { page, search, tags } = route.useSearch();

  return (
    <div className="flex flex-col gap-3">
      <div>Epic {epicId}</div>
      <div>
        Search: <pre>{JSON.stringify({ page, search, tags })}</pre>
      </div>
    </div>
  );
};
