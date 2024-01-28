import Link from "next/link";

export default async function Page(props) {
  const { id } = props.params;
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const json = await data.json();

  return (
    <div>
      <p>incremental-search/page.tsx</p>
      <pre>{JSON.stringify(json)}</pre>
      <Link href="/incremental-search">back</Link>
    </div>
  );
}
