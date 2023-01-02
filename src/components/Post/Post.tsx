import Link from "next/link";
import { Card } from "../Card";
import { PostModel } from "@/lib/database";
import Routes from "@/constants/Routes";

export interface CardProps {
  post: PostModel;
}

export const Post = ({ post }: CardProps) => {
  const { id, title, description, tags = [] } = post;

  return (
    <Card
      className="hover:bg-gray-100 dark:hover:bg-gray-700"
      as={Link}
      href={Routes.post(id)}
    >
      <article className="flex flex-col">
        <h1 className="mb-2 text-xl font-semibold text-white line-clamp-2 sm:text-slate-900 dark:sm:text-white">
          {title}
        </h1>

        <div className="grow">
          <p className="mb-4 text-base line-clamp-5 dark:text-slate-400">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-1">
          {(tags ?? []).map((tag) => (
            <span
              className="rounded-full bg-primary-500 px-2 py-1 text-xs font-semibold text-white"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Card>
  );
};
