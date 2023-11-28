// hogeコンポーネントのstory
import React from "react";
import { Foo } from "./foo";

export default {
  title: "Foo",
  component: Foo,
};

export function Default(): JSX.Element {
  return <Foo />;
}
