//NextJs Component
import Link from "next/link";
import Image from "next/image";

//CSS Module
import Style from "./news.module.css";

//APIs
import { useGetCryptoNewsQuery } from "../../utils/cryptoNewsAPI";

export default function LatestNews() {
  const { data } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: 5,
  });
  const posts = data?.value;
  return (
    <div className={Style.container}>
      <h2>Latest News</h2>
      <ul>
        {posts?.map((post) => {
          const imageUrl = post.image.thumbnail.contentUrl;
          return (
            <Link href={post.url}>
              <li>
                <div className={Style.image}>
                  <Image
                    src={imageUrl}
                    alt={post.name}
                    height={300}
                    width={300}
                  />
                </div>
                <div>
                  <h3>{post.name}</h3>
                  <p>{post.description}</p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
