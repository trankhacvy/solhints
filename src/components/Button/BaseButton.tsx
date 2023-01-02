import { forwardRefWithAs } from "@/utils/render";
import cx from "classnames";
import React, { HTMLAttributes } from "react";
import { Box } from "../Box";

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonScheme = "primary" | "secondary";

export type ButtonVariant = "solid" | "outline" | "link";

export interface BaseButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  target?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const BaseButton = forwardRefWithAs<"button", BaseButtonProps>(
  (
    {
      children,
      className,
      as = "button",
      type = as === "button" ? "button" : undefined,
      ...rest
    },
    ref
  ) => {
    let rel: undefined | string;

    if (as === "a" && rest.target === "_blank") {
      rel = "noopener noreferrer";
    }

    return (
      <Box
        ref={ref}
        as={as}
        {...rest}
        rel={rel}
        className={cx(
          "inline-flex select-none items-center justify-center rounded-md font-medium",
          "focus:outline-none focus-visible:ring",
          rest.disabled ? "cursor-not-allowed" : "cursor-pointer",
          className
        )}
      >
        {children}
      </Box>
    );
  }
);
