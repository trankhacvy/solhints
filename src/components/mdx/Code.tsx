import React from 'react';

import { CodeBlock } from './CodeBlock';

interface Props {
  children: React.ReactNode;
  className: string;
}

export const Code = ({ children, className }: Props) => {
  if (!className) return <code className="text-pink-500">{children}</code>;
  return (
    <CodeBlock language={className.split('-')[1] as 'tsx' | 'jsx' | 'bash'}>
      {children}
    </CodeBlock>
  );
};
