//Next component
import Image from "next/image";
import Link from "next/link";

//Ant Design Component

//CSS Module
import Style from "./header.module.css";

function Header() {
  return (
    <header className={Style.header}>
      <div className={Style.logo}>
        <Image
          src="/images/static/cryptocurrency.png"
          alt="logo"
          width={60}
          height={60}
        />
        <h2>Crypto</h2>
      </div>
      <ul>
        <li>
          <Link href="/">
            <a>
              <Image
                src="/images/static/menuIcons/home.png"
                alt="homeIcon"
                width={25}
                layout="fixed"
                height={25}
              />
              <span>Home</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/cryptocurrencies">
            <a>
              <Image
                src="/images/static/menuIcons/wallet.png"
                alt="cryptocurrenciesIcon"
                width={25}
                height={25}
                layout="fixed"
              />
              <span>Cryptocurrencies</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/exchanges">
            <a>
              <Image
                src="/images/static/menuIcons/exchanges.png"
                alt="logo"
                width={25}
                layout="fixed"
                height={25}
              />
              <span>Exchanges</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/news">
            <a>
              <Image
                src="/images/static/menuIcons/news.png"
                alt="logo"
                width={25}
                height={25}
                layout="fixed"
              />
              <span>News</span>
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
