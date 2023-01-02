import NextLink from 'next/link';
import * as React from 'react';

interface Props {
  title?: React.ReactNode;
  href?: string;
  blank?: boolean;
  children?: React.ReactNode;
}

export const Link = ({ href = '/', children }: Props) => {
  const isRelativeUrl = !/^([a-z0-9]*:|.{0})\/\/.*$/gim.test(href);

  if (isRelativeUrl) {
    return (
      <NextLink className="text-primary" href={href} passHref>
        {children}
      </NextLink>
    );
  }

  return (
    <a
      className="text-primary"
      target={'_blank'}
      href={href}
      rel="noreferrer nofollow"
    >
      {children}
    </a>
  );
};
