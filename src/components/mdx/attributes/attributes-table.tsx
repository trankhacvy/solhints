import React from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const AttributesTable: React.FC<Props> = ({ children }) => {
  return (
    <div className="attr border-border mb-7 w-full rounded-lg border bg-transparent p-4">
      {React.Children.map(children, (child: JSX.Element) => {
        return (
          <>
            {child.type == 'table' ? (
              <div className="overflow-x-auto pt-10">{child}</div>
            ) : (
              <div className="my-5">{child}</div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default AttributesTable;
