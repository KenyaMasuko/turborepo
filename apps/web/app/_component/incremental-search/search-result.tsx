import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  userId: string;
  completed: string;
};

export const SearchResult: React.FC<Props> = async ({
  title,
  userId,
  completed,
}) => {
  console.log(title, userId, completed);

  const query = new URLSearchParams();
  if (userId !== undefined) {
    query.append("userId", userId);
  } else {
    query.delete("userId");
  }

  if (completed !== undefined) {
    query.append("completed", completed);
  } else {
    query.delete("completed");
  }

  if (title !== undefined && title !== "") {
    query.append("title", title);
  } else {
    query.delete("title");
  }

  console.log(query.toString());

  const json = await fetch(
    `https://jsonplaceholder.typicode.com/todos?${query.toString()}`
  );
  const data = (await json.json()) as {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[];

  return (
    <pre>
      {data.map((x) => (
        <Link key={x.id} href={`/incremental-search/${x.id}`}>
          <pre>{JSON.stringify(x)}</pre>
        </Link>
      ))}
    </pre>
  );
};
