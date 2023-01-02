import { Button } from '@/components/Button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/Modal';
import type { PostFrontMatter } from '@/types/PostFrontMatter';

export interface NewPostModalProps {
  post: PostFrontMatter;
}

export const NewPostModal = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>New Post</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="prose !max-w-2xl dark:prose-invert">
        <AlertDialogTitle asChild>
          <h2>New Post</h2>
        </AlertDialogTitle>
        <AlertDialogDescription asChild>
          <form>
            <div>
              <label htmlFor="title" className="mb-2 block text-sm font-medium">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Title"
                required
              />
            </div>
          </form>
        </AlertDialogDescription>
        <div className="mt-5 flex justify-end gap-3">
          <AlertDialogCancel asChild>
            <Button>Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button>Delete</Button>
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};
