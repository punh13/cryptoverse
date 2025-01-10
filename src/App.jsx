import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import CoinPage from './pages/CoinPage';
import ExchangesPage from './pages/ExchangesPage';
import ExchangeInfo from './components/Exchanges/ExchangeInfo/ExchangeInfo';

function App() {
  return (
    <>
      {' '}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/cryptocurrencies" element={<DashboardPage />}></Route>
          <Route path="/coin/:id" element={<CoinPage />}></Route>
          <Route path="/exchanges" element={<ExchangesPage />}></Route>
          <Route path="/exchanges/:id" element={<ExchangeInfo />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
