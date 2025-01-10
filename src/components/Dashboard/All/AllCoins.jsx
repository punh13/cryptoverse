import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import TabsComponent from "../Tabs/TabsComponent";
import PaginationControlled from "../Pagination/Pagination";
import Loader from "../../Common/Loader/Loader";
import { get200Coins } from "../../../functions/getCoins";

export default function AllCoins() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = React.useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const onSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const coinsPerPage = 20;
  const totalPages = Math.ceil(filteredCoins.length / coinsPerPage);

  const displayedCoins = filteredCoins.slice(
    (page - 1) * coinsPerPage,
    page * coinsPerPage
  );

  useEffect(() => {
    fetchAllCoins();
  }, []);

  const fetchAllCoins = async () => {
    try {
      const allCoins = await get200Coins();
      if (allCoins) {
        setCoins(allCoins);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching coins:", error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (filteredCoins.length === 0) {
    return (
      <div>
        No coins available. Please try adjusting your search or check back
        later.
      </div>
    );
  }

  return (
    <div>
      <SearchBar search={search} onSearchChange={onSearchChange} />
      <TabsComponent coins={displayedCoins} />
      {filteredCoins.length > coinsPerPage && (
        <PaginationControlled
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
}
