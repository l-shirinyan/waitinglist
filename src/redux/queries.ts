import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest } from "../configs/requests";

const headers = {
  accept: "application/json",
  "Content-Type": "application/json",
};

export function useFetch(url?: string, queryKey?: string) {
  return useQuery({
    queryKey: [queryKey],
    queryFn: () => apiRequest(url, "get", undefined, headers),
  });
}

export function joinQueue(url?: string, method = "get") {
  return {
    mutate: useMutation({
      mutationFn: (body?: object) => apiRequest(url, method, body, headers),
    }),
  };
}
