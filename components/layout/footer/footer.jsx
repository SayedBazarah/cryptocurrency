//NextJS Component
import Link from "next/link";

//CSS Module
import Style from "./footer.module.css";

function Footer() {
  return (
    <footer className={Style.footer}>
      <p>Crypto</p>
      <p>All rights reserved</p>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/cryptocurrencies">Cryptocurrencies</Link>
        </li>
        <li>
          <Link href="/exchanges">Exchanges</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
