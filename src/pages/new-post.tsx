import { useForm, Controller } from "react-hook-form";
import dynamic from "next/dynamic";
import { Input } from "@/components/Input";
import { useTheme } from "next-themes";
import { Button } from "@/components/Button";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { database } from "@/lib/database";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);

type NewPostFormFields = {
  title: string;
  tags: string;
  repo: string;
  address?: string;
  description?: string;
};

const NewPost = () => {
  const { theme } = useTheme();
  const { replace } = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<NewPostFormFields>({
    defaultValues: {
      title: "",
      repo: "",
      tags: "",
      address: "",
      description: "",
    },
  });

  const onSubmit = async (values: NewPostFormFields) => {
    try {
      const { error } = await database.from("devhint_posts").insert({
        title: values.title,
        tags: values.tags.split(","),
        repo: values.repo,
        address: values.address,
        description: values.description,
      });
      if (error) throw error;

      replace("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NextSeo
        title="New Post | SolHints 👩‍💻👨‍💻"
        openGraph={{
          title: "New Post | SolHints 👩‍💻👨‍💻",
          locale: "en",
          site_name: "SolHints 👩‍💻👨‍💻",
        }}
      />
      <div className="py-10 max-w-xl mx-auto">
        <div className="flex items-center mb-4 text-slate-800 dark:text-white">
          <Link href="/" replace className="text-xl mr-4">
            <ArrowLeftIcon />
          </Link>
          <h2 className="text-2xl font-bold">Add new post</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 md:mb-6">
            <label htmlFor="title" className="block mb-2 text-sm font-medium">
              Title
            </label>
            <Input
              {...register("title", {
                required: "Required",
              })}
              placeholder="Swap Program"
            />
            {errors.title && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                {errors.title.message}
              </p>
            )}
          </div>

          <div className="mb-4 md:mb-6">
            <label htmlFor="repo" className="block mb-2 text-sm font-medium">
              Repo URL
            </label>
            <Input
              {...register("repo", {
                required: "Required",
              })}
              placeholder="https://github.com/solana-labs/solana-program-library"
            />
            {errors.title && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                {errors.title.message}
              </p>
            )}
          </div>

          <div className="mb-4 md:mb-6">
            <label htmlFor="tags" className="block mb-2 text-sm font-medium">
              Tags
            </label>
            <Input
              {...register("tags", {
                required: "Required",
              })}
              placeholder="defi, swap"
            />
            {errors.tags && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                {errors.tags.message}
              </p>
            )}
          </div>

          <div className="mb-4 md:mb-6">
            <label htmlFor="address" className="block mb-2 text-sm font-medium">
              Address
            </label>
            <Input
              {...register("address")}
              placeholder="TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
            />
            {/* {errors.address && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {errors.address.message}
            </p>
          )} */}
          </div>

          <div className="mb-4 md:mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium"
            >
              Description
            </label>
            <Controller
              control={control}
              name="description"
              render={({
                field: { onChange, value, ...rest },
                //   fieldState: { invalid, isTouched, isDirty, error },
                //   formState,
              }) => (
                <MDEditor
                  data-color-mode={theme as any}
                  value={value}
                  onChange={(_, event) => onChange(event)}
                  {...rest}
                />
              )}
            />
          </div>
          <div className="flex justify-end space-x-4">
            <Button variant="outline">Cancel</Button>
            <Button type="submit">Create</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewPost;
