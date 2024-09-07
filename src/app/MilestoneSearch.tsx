import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { FC, useRef, useState } from "react";

const route = getRouteApi("/epics/$epicId/milestones/");

export const MilestoneSearch: FC<{}> = () => {
  const { epicId } = route.useParams();
  const { page, search, tags } = route.useSearch();

  const tag1 = useRef<HTMLInputElement>(null as unknown as HTMLInputElement);
  const tag2 = useRef<HTMLInputElement>(null as unknown as HTMLInputElement);
  const tag3 = useRef<HTMLInputElement>(null as unknown as HTMLInputElement);

  const searchRef = useRef<HTMLInputElement>(null as unknown as HTMLInputElement);

  const navigate = useNavigate({ from: "/epics/$epicId/milestones/" });

  const pageDown = () => {
    navigate({
      to: ".",
      search: (prev) => {
        return { ...prev, page: prev.page - 1 };
      },
    });
  };
  const pageUp = () => {
    navigate({
      to: ".",
      search: (prev) => {
        return { ...prev, page: prev.page + 1 };
      },
    });
  };
  const updateSearchParams = () => {
    let tags: any = [tag1.current.value, tag2.current.value, tag3.current.value].filter((val) => val);
    if (tags.length === 0) {
      tags = undefined;
    }

    navigate({
      to: ".",
      search: (prev) => {
        return { ...prev, search: searchRef.current.value, tags };
      },
    });
  };

  return (
    <div className="flex flex-col gap-3">
      <div>Epic {epicId}</div>
      <div>
        Search values in component: <pre>{JSON.stringify({ page, search, tags })}</pre>
      </div>
      <hr className="my-5" />
      <div>Tags</div>
      <div className="flex gap-2">
        <input type="text" className="border p-2 w-13" ref={tag1} />
        <input type="text" className="border p-2 w-13" ref={tag2} />
        <input type="text" className="border p-2 w-13" ref={tag3} />
      </div>
      <div>Search</div>
      <div className="flex gap-2">
        <input type="text" className="border p-2 w-13" ref={searchRef} />
      </div>
      <div>
        <button className="border p-2" onClick={updateSearchParams}>
          Update
        </button>
      </div>
      <div className="flex gap-2">
        <button disabled={page == 1} className="border p-2" onClick={pageDown}>
          Page Down
        </button>
        <button className="border p-2" onClick={pageUp}>
          Page Up
        </button>
      </div>
    </div>
  );
};
