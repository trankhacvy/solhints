import * as React from 'react';

interface Props {
  children?: React.ReactNode;
}

export const Paragraph = ({ children }: Props) => {
  return <p className="text-content1 pb-3 text-base leading-7">{children}</p>;
};
