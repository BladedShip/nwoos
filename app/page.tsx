import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

import NewsList from "@/components/NewsList";
import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";

type Props = {};

async function Home({}: Props) {
  const news: NewsResponse = await fetchNews(categories.join(","));

  return (
    <div className={poppins.className}>
      <NewsList news={news} />
    </div>
  );
}

export default Home;