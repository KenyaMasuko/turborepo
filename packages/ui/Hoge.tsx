import * as React from "react";

type Props = {
  children: React.ReactNode;
};

export const Hoge = ({ children }: Props) => {
  return (
    <div>
      <h1>Hoge</h1>
      {children}
    </div>
  );
};
