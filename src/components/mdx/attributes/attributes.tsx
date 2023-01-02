import React, { useMemo } from 'react';

import AttributesTable from './attributes-table';
import type AttributesTitle from './attributes-title';

export interface AttributesProps {
  children: JSX.Element | JSX.Element[];
}

const Attributes: React.FC<AttributesProps> = React.memo(({ children }) => {
  const apiTitles = useMemo(() => {
    if (React.Children.count(children) === 0) return null;
    return (
      <>
        <div className="my-5" />
        <AttributesTable>{children}</AttributesTable>
      </>
    );
  }, [children]);

  return <>{apiTitles}</>;
});

type AttributesComponent<P> = React.FC<P> & {
  Title: typeof AttributesTitle;
  Table: typeof AttributesTable;
};
Attributes.displayName = 'Attributes';
export default Attributes as AttributesComponent<AttributesProps>;
