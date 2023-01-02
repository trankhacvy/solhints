import matter from "gray-matter";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { MDXRemoteProps, MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";

import { mdxComponents } from "@/components/mdx";
import { database, PostModel } from "@/lib/database";
import Link from "next/link";
import {
  ArrowLeftIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@/components/Button";
import Routes from "@/constants/Routes";
import { NextSeo } from "next-seo";

const components = {
  ...mdxComponents,
};

type MDXComponents = MDXRemoteProps["components"];

const PostPage = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { title, tags, address } = post;
  return (
    <>
      <NextSeo
        title={`${title} | SolHints 👩‍💻👨‍💻`}
        openGraph={{
          title: `${title} | SolHints 👩‍💻👨‍💻`,
          locale: "en",
          site_name: "SolHints 👩‍💻👨‍💻",
        }}
      />

      <div className="py-10">
        <div className="flex items-center mb-4 text-slate-800 dark:text-white">
          <Link href={Routes.home} replace className="text-xl mr-2">
            <ArrowLeftIcon />
          </Link>
          <h2 className="text-2xl font-bold">{title}</h2>
          <Button
            className="!p-0 ml-4"
            rightIcon={<ArrowTopRightOnSquareIcon />}
            variant="link"
          >
            {address}
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 mb-10">
          {(tags ?? []).map((tag) => (
            <span
              className="rounded-full bg-primary-500 px-2 py-1 text-xs font-semibold text-white"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="p-6 rounded-lg border border-slate-200 max-w-[unset] prose dark:prose-invert">
          <MDXRemote
            {...post.description}
            components={components as MDXComponents}
          />
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const { data, error } = await database.from("devhint_posts").select("*");

  if (!data || error) {
    return {
      paths: [],
      fallback: false,
    };
  }

  const paths = data.map((post) => ({
    params: {
      postId: post.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  post: Omit<PostModel, "description"> & {
    description: MDXRemoteSerializeResult<
      Record<string, unknown>,
      Record<string, string>
    >;
  };
}> = async ({ params }) => {
  const postId = params?.postId;

  if (!postId) {
    return {
      notFound: true,
    };
  }

  const { data, error } = await database
    .from("devhint_posts")
    .select("*")
    .eq("id", postId)
    .single();

  if (!data || error) {
    return {
      notFound: true,
    };
  }

  const { content } = matter(data.description ?? "");

  const mdxSource = await serialize(content, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
      development: false,
    },
  });

  return {
    props: {
      post: {
        ...data,
        description: mdxSource,
      },
    },
    revalidate: 60,
  };
};

export default PostPage;
