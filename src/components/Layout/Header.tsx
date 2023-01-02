import dynamic from "next/dynamic";
import Routes from "@/constants/Routes";
import { Button } from "../Button";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/solid";

const ThemeSwitcher = dynamic(
  () => import("@/components/ThemeSwitcher").then((mod) => mod.ThemeSwitcher),
  { ssr: false }
);

export interface HeaderProps {}

export const Header = () => {
  return (
    <header className="mx-auto max-w-5xl">
      <nav className="rounded border-gray-200 px-2 py-2.5 sm:px-4">
        <div className="flex w-full flex-wrap items-center justify-between">
          <a href={Routes.home} className="flex items-center">
            <img
              src="/assets/logo.png"
              className="mr-3 h-6 sm:h-9"
              alt="SolHints"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              SolHints
            </span>
          </a>
          <div className="flex space-x-2 md:order-2">
            <Button leftIcon={<PlusIcon />} href={Routes.newPost} as={Link}>
              New Post
            </Button>
            <ThemeSwitcher />

            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
