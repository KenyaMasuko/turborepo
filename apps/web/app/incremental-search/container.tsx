"use client";

import * as React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "../_component/incremental-search/useDebounce";

export const Container: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value !== undefined && value !== "") {
        params.set(name, value);
      } else {
        params.delete(name);
      }

      return params.toString();
    },
    [searchParams]
  );
  const [title, setSearchTitleValue1] = React.useState(
    searchParams.get("title") ?? ""
  );
  const [userId, setUserId] = React.useState(searchParams.get("userId") ?? "");
  const [done, setDone] = React.useState(
    searchParams.get("completed") ?? "false"
  );

  const { debounce, flush } = useDebounce(300);
  const handleInput = (value: string) => {
    debounce(() => {
      const params = createQueryString("title", value);
      router.push(`${pathname}?${params}`);
    }),
      setSearchTitleValue1(value);
  };
  const handleSelect = (value: string) => {
    debounce(() => {
      const params = createQueryString("userId", value);
      router.push(`${pathname}?${params}`);
    }),
      setUserId(value);
  };
  const handleDone = (value: boolean) => {
    const val = value ? "true" : "false";
    debounce(() => {
      const params = createQueryString("completed", val);
      router.push(`${pathname}?${params}`);
    }),
      setDone(val);
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        placeholder="検索ボックス1"
        onChange={(e) => handleInput(e.target.value)}
        onBlur={() => flush()}
      />
      <select
        value={userId}
        onChange={(e) => handleSelect(e.target.value)}
        onBlur={() => flush()}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <label htmlFor="done">
        完了
        <input
          name="done"
          value={done}
          type="checkbox"
          onChange={(e) => handleDone(e.target.checked)}
          onBlur={flush}
        />
      </label>
      {title === "" && <p>テキストボックスを入力してください！</p>}
    </div>
  );
};
