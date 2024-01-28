import { SearchResult } from "../_component/incremental-search/search-result";
import { Container } from "./container";

type Props = {
  searchParams: {
    title: string;
    userId: string;
    completed: string;
  };
};

const Page: React.FC<Props> = async (props) => {
  return (
    <div>
      <p>incremental-search/page.tsx</p>
      <Container />
      <SearchResult {...props.searchParams} />
    </div>
  );
};

export default Page;
