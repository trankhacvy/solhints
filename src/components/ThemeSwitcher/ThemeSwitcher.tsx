import {
  MoonIcon,
  RectangleGroupIcon,
  SunIcon,
} from '@heroicons/react/24/solid';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import cx from 'classnames';
import { useTheme } from 'next-themes';
import React from 'react';

const themes = [
  {
    key: 'light',
    label: 'Light',
    icon: <SunIcon />,
  },
  {
    key: 'dark',
    label: 'Dark',
    icon: <MoonIcon />,
  },

  {
    key: 'system',
    label: 'System',
    icon: <RectangleGroupIcon />,
  },
];

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative inline-block text-left">
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger
          className={cx(
            'inline-flex select-none justify-center rounded-md px-2.5 py-2 text-sm font-medium',
            'bg-white text-gray-900 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-100 hover:dark:bg-gray-600',
            'border border-gray-300 dark:border-transparent',
            'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
          )}
        >
          {theme === 'dark' && (
            <MoonIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          )}
          {theme === 'light' && (
            <SunIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          )}
          {theme === 'system' && (
            <RectangleGroupIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          )}
        </DropdownMenuPrimitive.Trigger>

        <DropdownMenuPrimitive.Portal>
          <DropdownMenuPrimitive.Content
            align="end"
            sideOffset={5}
            className={cx(
              ' radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down',
              'w-48 rounded-lg px-1.5 py-1 shadow-md md:w-56',
              'bg-gray-50 dark:bg-gray-700'
            )}
          >
            {themes.map(({ key, label, icon }, i) => {
              return (
                <DropdownMenuPrimitive.Item
                  key={`theme-${i}`}
                  className={cx(
                    'flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none',
                    'text-gray-500 focus:bg-gray-200 dark:text-gray-400 dark:focus:bg-gray-800'
                  )}
                  onClick={() => {
                    setTheme(key);
                  }}
                >
                  {React.cloneElement(icon, {
                    className: 'w-5 h-5 mr-2 text-gray-700 dark:text-gray-300',
                  })}
                  <span className="grow text-gray-700 dark:text-gray-300">
                    {label}
                  </span>
                </DropdownMenuPrimitive.Item>
              );
            })}
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
      </DropdownMenuPrimitive.Root>
    </div>
  );
};
