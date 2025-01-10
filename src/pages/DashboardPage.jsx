import React, { useEffect, useState } from 'react';
import Header from '../components/Common/Header/Header';
import ScrollToTop from '../components/Common/ScrollToTop/ScrollToTop';
import Loader from '../components/Common/Loader/Loader';
import GlobalCryptoInfo from '../components/Dashboard/GlobalInfo/GlobalCryptoInfo';
import CryptoTabs from '../components/Dashboard/CryptoTabs/CryptoTabs';


export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <GlobalCryptoInfo/>
          <CryptoTabs/>
        </>
      )}
      <ScrollToTop />
    </div>
  );
}
