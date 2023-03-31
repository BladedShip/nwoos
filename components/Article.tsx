import Link from "next/link";
import LiveTimestamp from "./LiveTimestamp";

type Props = {
  article: Article;
};

function Article({ article }: Props) {
  return (
    <article className="bg-[#fcfcfc] dark:bg-[#2c2c2c] flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-56 object-cover rounded-t-lg shadow-md"
        />
      )}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col p-5">
          <h2 className="font-bold font-serif">{article.title}</h2>
          <section className="mt-2 flex-1">
            <p className="text-xs line-clamp-6">{article.description}</p>
          </section>
          <footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400">
            <p>{article.source}</p>
            <p>
              - <LiveTimestamp time={article.published_at} />
            </p>
          </footer>
        </div>
      </div>
      <Link
        href={article.url}
        target="_blank"
        rel="noreferrer noopener"
        className="bg-[#dbbadd] h-10 rounded-b-lg dark:text-[#2c2c2c] justify-center items-center flex"
      >
        Read More
      </Link>
    </article>
  );
}

export default Article;
