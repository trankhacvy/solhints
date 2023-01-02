import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Li = ({ children }: Props) => {
  return <li className="text-content2 my-3 ml-4 list-decimal">{children}</li>;
};
