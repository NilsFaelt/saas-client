import { apiClient } from "@/api";

import { useMutation } from "@tanstack/react-query";

const fetchClick = async (bookmarkId: string, token: string) => {
  try {
    const response = await fetch(
      `${apiClient("/click/increment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ bookmarkId }),
      })}`
    ).then((res) => res.json);
    return response;
  } catch (err) {
    console.log(`couldnt add bookmark`, err);
    throw err;
  }
};

export const useMutateIncrementClick = (bookmarkId: string, token: string) => {
  return useMutation(() => fetchClick(bookmarkId, token), {
    onSuccess: () => {
      console.log("added anyltics");
    },
    onError: (error) => {},
  });
};
