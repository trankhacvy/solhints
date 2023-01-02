import { database } from "@/lib/database";
import { useFetchWithCache } from "./useFetchWithCache";

export const SWR_KEYS_GET_POSTS = "GET_POSTS";

export const useFetchPosts = () => {
  const { data: posts, ...rest } = useFetchWithCache(
    SWR_KEYS_GET_POSTS,
    async () => {
      const { data, error } = await database.from("devhint_posts").select("*");
      if (error) throw error;
      return data;
    }
  );

  return {
    posts,
    ...rest,
  };
};
