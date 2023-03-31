import { gql } from "graphql-request";
import sortByImg from "./sortByImg";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  const QUERY = gql`
    query myQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        keywords: $keywords
        countries: "in,us"
        sort: "published_desc"
      ) {
        data {
          author
          category
          country
          description
          image
          language
          source
          title
          url
          published_at
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  const res = await fetch(
    "https://chorfa.stepzen.net/api/olfactory-lamb/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 7000 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        QUERY,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );

  const newsResponse = await res.json();

  const response = sortByImg(newsResponse.data.myQuery);

  return response;
};

export default fetchNews;
