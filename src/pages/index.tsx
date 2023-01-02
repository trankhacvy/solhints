import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { useState } from "react";
import { Post } from "@/components/Post";
import { SearchBar } from "@/components/SearchBar";
import { database, PostModel } from "@/lib/database";
import { NextSeo } from "next-seo";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [searchValue, setSearchValue] = useState("");

  const filteredBlogPosts = posts.filter((post) => {
    const searchContent =
      (post.title ?? "") + post.description + (post.tags ?? []).join(" ");
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <>
      <NextSeo
        title="SolHints 👩‍💻👨‍💻"
        description=""
        // canonical={props.canonical}
        openGraph={{
          title: "SolHints 👩‍💻👨‍💻",
          description: "",
          // url: props.canonical,
          locale: "en",
          site_name: "SolHints 👩‍💻👨‍💻",
        }}
      />
      <div className="py-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
          <div className="lg:col-start-2">
            <SearchBar setSearchValue={setSearchValue} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredBlogPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<{
  posts: PostModel[];
}> = async () => {
  const { data, error } = await database.from("devhint_posts").select("*");

  if (error || !data) {
    return { props: { posts: [] }, revalidate: 60 };
  }

  return { props: { posts: data }, revalidate: 60 };
};
