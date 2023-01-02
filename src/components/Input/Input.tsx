import cx from "classnames";
import { cva } from "class-variance-authority";
import React from "react";
import { forwardRefWithAs } from "@/utils/render";
import { Box } from "../Box";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  fullWidth?: boolean;
  value?: string;
  type?: "text" | "date" | "time" | "email" | "number" | "tel" | "password";
}

const inputClasses = cva(
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5 focus-visible:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
  {
    variants: {
      fullWidth: {
        true: "block w-full",
      },
    },
    compoundVariants: [],
    defaultVariants: {},
  }
);

export const Input = forwardRefWithAs<"input" | "textarea", InputProps>(
  ({ className, as = "input", fullWidth = true, ...rest }, ref) => {
    const classes = inputClasses({
      fullWidth,
    });

    return (
      <Box ref={ref} as={as} className={cx(classes, className)} {...rest} />
    );
  }
);
