import cx from "classnames";
import { forwardRefWithAs } from "@/utils/render";
import { Box } from "@/components/Box";

export interface CardProps {
  className?: string;
}

export const Card = forwardRefWithAs<"div", CardProps>((props, ref) => {
  const { as = "div", className, ...rest } = props;

  return (
    <Box
      ref={ref}
      as={as}
      className={cx(
        "block p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700",
        className
      )}
      {...rest}
    />
  );
});
