//NextJs/ReactJs Component
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

//CSS Module
import Style from "./searchbar.module.css";

export default function SearchBar() {
  const [userLogin, setUserLogin] = useState(false);
  const [notification, setNotification] = useState(true);

  return (
    <div className={Style.container}>
      <form>
        <div className={Style.searchForm}>
          <Image
            src="/images/static/searchbarIcons/search.png"
            alt="search icon"
            width={20}
            height={20}
          />
          <input placeholder="Search for ..." />
        </div>
      </form>
      <div className={Style.notifications}>
        <Image
          src="/images/static/searchbarIcons/alert.png"
          alt="search icon"
          width={20}
          height={20}
        />
        <span className={notification ? Style.alert : null}></span>
      </div>
      <div className={Style.login}>
        {userLogin ? (
          <Image src="/" alt="search icon" width={30} height={30} />
        ) : (
          <Link href="/Login">Login/Sign up</Link>
        )}
      </div>
    </div>
  );
}
