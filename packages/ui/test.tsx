import * as React from "react";

export function Test({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  console.log("hello");

  return (
    <div>
      <h1>test</h1>
      {children}
    </div>
  );
}
