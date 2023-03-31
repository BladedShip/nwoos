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
  params: {
    category: Category;
  };
};

async function Cateory({ params: { category } }: Props) {
  const news: NewsResponse = await fetchNews(category);
  return (
        <div className={poppins.className}>
            <h1 className="text-3xl underline decoration-4 decoration-[#dbbadd] font-bold underline-offset-8 capitalize">{category}</h1>
          <NewsList news={news} />
        </div>
  );
}

export default Cateory;

export async function generateStaticParams() {
    return categories.map((category) => ({
        category: category,
    }));
}
