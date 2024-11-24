import './App.css';
import IndexPage from './pages/IndexPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BattlePage from './pages/BattlePage';
import ShopPage from './pages/ShopPage';
import MyPage from './pages/MyPage';
import MyCartPage from './pages/MyCartPage';
import LoginPage from "./pages/LoginPage";
import AppHeader from './components/common/AppHeader';
import BattleResultPage from './pages/BattleResultPage';

function App() {
    return (
        <BrowserRouter>
            <AppHeader title="KazApp" />
            <Routes>
                <Route path={"/"} element={<IndexPage />} />
                <Route path={"/indexPage"} element={<IndexPage />} />
                <Route path={"/loginPage"} element={<LoginPage />} />
                <Route path={"/myCartPage"} element={<MyCartPage />} />
                <Route path={"/myPage"} element={<MyPage />} />
                <Route path={"/ShopPage"} element={<ShopPage />} />
                <Route path={"/battlePage"} element={<BattlePage />} />
                <Route path={"/battleResultPage"} element={<BattleResultPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
