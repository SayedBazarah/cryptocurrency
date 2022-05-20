//NextJS Component
import Image from "next/image";
import Link from "next/link";

//Custom Components
import CurrenciesOverview from "./currenciesOverview";
import CryptoCurrenciesPrices from "./cryptoCurrenciesPrices";
import LatestNews from "./news";
//APIs Functions
import { useGetCryptosQuery } from "../../utils/cryptoAPI";

//Style
import Style from "./home.module.css";

export default function Home(props) {
  const { data, isFetching } = useGetCryptosQuery(10);
  const coins = data?.data.coins;
  const stats = data?.data.stats;

  if (isFetching) {
    return <div> Fetching...</div>;
  }
  return (
    <div className={Style.container}>
      <div className={Style.slogan}>
        <h1>Crepto</h1>
        <p>Future of digital currencies platform</p>
      </div>
      <section>
        <ul className={Style.coinIconList}>
          {coins.map((coin) => {
            const currencyUrl = `/${coin.symbol}`;
            return (
              <li key={coin.uuid}>
                <Link href={currencyUrl}>
                  <a>
                    <Image
                      src={coin.iconUrl}
                      alt={coin.name}
                      width={60}
                      height={60}
                    />
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={Style.statistices}>
          <h2>Statistices</h2>
          <CurrenciesOverview stats={stats} />
        </div>
      </section>
      <CryptoCurrenciesPrices coins={coins} />
      <LatestNews />
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: { id: Hello },
  };
}
