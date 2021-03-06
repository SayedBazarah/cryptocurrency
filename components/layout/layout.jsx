//Next Component
import Head from "next/head";

//component
import Header from "./header/header";
import Footer from "./footer/footer";
import SearchBar from "./header/searchbar";

//CSS Module
import Style from "./layout.module.css";

function Layout(props) {
  return (
    <>
      <Head>
        <title>Crepto</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={Style.container}>
        <Header />
        <div className={Style.pageContent}>
          <SearchBar />
          <main>{props.children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
