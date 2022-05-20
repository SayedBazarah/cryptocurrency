//NextJs  &  Third Libarary
import Image from "next/image";
import Link from "next/link";
import millify from "millify";

//CSS Module
import Style from "./cryptoPrices.module.css";

export default function CryptoCurrenciesPrices(props) {
  const { coins } = props;

  return (
    <div className={Style.container}>
      <h2>Top Cryptocurencies Prices</h2>
      <ul className={Style.list}>
        {coins.map((coin, index) => {
          return (
            <li key={index}>
              <Image
                src={coin.iconUrl}
                alt={`${coin.name} coin icon`}
                width={50}
                height={50}
              />
              <div>
                <h3>{coin.name}</h3>
                <p>$ {millify(coin.price)}</p>
              </div>
              <Link href="/">
                <a>More Details</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
