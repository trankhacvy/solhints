import Attributes from "./attributes";
import { Code } from "./Code";
import { Li } from "./Li";
import { Link } from "./Link";
import LinkRedirect from "./LinkRedirect";

export const mdxComponents = {
  a: Link,
  li: Li,
  code: Code,
  Attributes,
  LinkRedirect,
};
