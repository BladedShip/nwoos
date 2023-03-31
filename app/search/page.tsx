import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

import fetchNews from "@/lib/fetchNews";
import NewsList from "@/components/NewsList";
import { categories } from "@/constants";

type Props = {
  searchParams?: {
    term: string;
  };
};

async function SearchPage({ searchParams }: Props) {
  const news: NewsResponse = await fetchNews(
    categories.join(","),
    searchParams?.term,
    true
  );
  return (
    <div className={poppins.className}>
      <h1 className="text-3xl">Search Results for "<span className="underline decoration-4 decoration-[#dbbadd]">{searchParams?.term}</span>"</h1>
      <NewsList news={news} />
    </div>
  );
}

export default SearchPage;
