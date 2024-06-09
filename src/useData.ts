import { QueryClient, useSuspenseQuery } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const dataQueryOptions = {
  queryKey: ["a"],
  queryFn: async () => {
    await new Promise((res) => setTimeout(res, 200));
    return {
      a: 12,
    };
  },
};

export const useData = () => {
  return useSuspenseQuery(dataQueryOptions);
};
