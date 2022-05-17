//NextJS Component

//Custom Components

import { useGetCryptosQuery } from "../../utils/cryptoAPI";

export default function Home() {
  const { data, isFetching } = useGetCryptosQuery(10);

  console.log(data);
  return (
    <div>
      <div> Hello, </div>
    </div>
  );
}
