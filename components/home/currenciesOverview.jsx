//NextJs Component
import Image from "next/image";

//Style Module
import Style from "./currenciesOverview.module.css";
export default function CurrenciesOverview({ stats }) {
  const {
    total,
    total24hVolume,
    totalExchanges,
    totalMarketCap,
    totalMarkets,
  } = stats;
  const data = [
    {
      title: "Total Cryptocurrencies",
      value: total,
      image: "/images/static/statsIcons/wallet.png",
    },
    {
      title: "Total 24h Volume",
      value: total24hVolume,
      image: "/images/static/statsIcons/24h.png",
    },
    {
      title: "Total Exchanges",
      value: totalExchanges,
      image: "/images/static/statsIcons/exchanges.png",
    },
    {
      title: "Total Market Cap",
      value: totalMarketCap,
      image: "/images/static/statsIcons/knowledge.png",
    },
    {
      title: "Total Markets",
      value: totalMarkets,
      image: "/images/static/statsIcons/total.png",
    },
  ];
  return (
    <div className={Style.container}>
      {data.map((stats, index) => {
        return (
          <div key={index} className={Style.stats}>
            <div>
              <Image src={stats.image} alt="icon" width={25} height={25} />
            </div>
            <div>
              <h3>{stats.title}</h3>
              <p>{stats.value}</p>
            </div>
          </div>
        );
      })}
      <div className={Style.stats}>
        <p> More Statistics ....</p>
      </div>
    </div>
  );
}
