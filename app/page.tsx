import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";

type Props = {};

async function Home({}: Props) {
  const news: NewsResponse = await fetchNews(categories.join(","));
  return <div>Home</div>;
}

export default Home;
