// hogeコンポーネントのstory
import React from "react";
import { Hoge } from "./hoge";

export default {
  title: "Hoge",
  component: Hoge,
};

export function Default(): JSX.Element {
  return <Hoge />;
}
