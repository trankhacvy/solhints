import cx from "classnames";
import { cva } from "class-variance-authority";
import React, { PropsWithChildren } from "react";
import {
  BaseButton,
  BaseButtonProps,
  ButtonScheme,
  ButtonSize,
  ButtonVariant,
} from "./BaseButton";
import { forwardRefWithAs } from "@/utils/render";

export interface ButtonProps extends PropsWithChildren<BaseButtonProps> {
  variant?: ButtonVariant;
  scheme?: ButtonScheme;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const buttonClasses = cva("rounded-lg", {
  variants: {
    variant: {
      solid: "",
      outline: "",
      link: "",
    },
    scheme: {
      primary: "",
      secondary: "",
    },
    size: {
      sm: "py-2 px-3 text-sm",
      md: "py-2.5 px-5 text-sm",
      lg: "py-3 px-5 text-base",
    },
    fullWidth: {
      true: "w-full",
    },
    disabled: {
      true: "opacity-60",
    },
  },
  compoundVariants: [
    {
      variant: "solid",
      scheme: "primary",
      className:
        "text-white bg-primary-700 enabled:hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:enabled:hover:bg-primary-700 dark:focus:ring-primary-800",
    },
    {
      variant: "solid",
      scheme: "secondary",
      className:
        "text-gray-900 focus:outline-none bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700",
    },
    {
      variant: "outline",
      scheme: "primary",
      className:
        "text-primary-700 enabled:hover:text-white border border-primary-700 enabled:hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:border-primary-500 dark:focus:ring-primary-800 dark:text-primary-500 dark:enabled:hover:text-white dark:enabled:hover:bg-primary-600",
    },
    {
      variant: "outline",
      scheme: "secondary",
      className:
        "text-gray-900 enabled:hover:text-white border border-gray-800 enabled:hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 dark:border-gray-600 dark:text-gray-400 dark:enabled:hover:text-white dark:enabled:hover:bg-gray-600",
    },
    {
      variant: "link",
      scheme: "primary",
      className:
        "text-primary-600 dark:text-primary-500 enabled:hover:underline focus:ring-4 focus:outline-none focus:ring-primary-300 dark:border-primary-500 dark:focus:ring-primary-800",
    },
    {
      variant: "link",
      scheme: "secondary",
      className:
        "text-primary-600 dark:text-primary-500 enabled:hover:underline focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 dark:border-gray-600",
    },
  ],
  defaultVariants: {
    size: "md",
    variant: "solid",
    scheme: "primary",
    fullWidth: false,
  },
});

const iconClasses = cva("font-semibold", {
  variants: {
    position: {
      left: "mr-2 -ml-1",
      right: "ml-2 -mr-1",
    },
    size: {
      sm: "text-base",
      md: "text-lg",
      lg: "text-xl",
    },
  },
});

export const Button = forwardRefWithAs<"button", ButtonProps>(
  (
    {
      children,
      className,
      size = "md",
      variant = "solid",
      scheme = "primary",
      fullWidth = false,
      disabled = false,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    const classes = buttonClasses({
      size,
      variant,
      scheme,
      fullWidth,
      disabled,
    });

    const iconClazz = iconClasses({
      position: leftIcon ? "left" : "right",
      size,
    });

    return (
      <BaseButton
        ref={ref}
        className={cx(classes, className)}
        disabled={disabled}
        {...props}
      >
        {leftIcon && <span className={iconClazz}>{leftIcon}</span>}
        {children}
        {rightIcon && <span className={iconClazz}>{rightIcon}</span>}
      </BaseButton>
    );
  }
);
