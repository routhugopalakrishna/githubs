import React from 'react';
import './app.css';
import { Route, Routes } from 'react-router-dom';
import Mainpage from './Mainpage';
import All from './Components/All';
import Fashion from './Components/Fashion';
import Accessories1 from './Components/Accessories1';
import Electronics from './Components/Electronics';
import Others from './Components/Others';
import Furniture1 from './Components/Furniture1';
import Glamorouspage from './pages/Sub-pages/Glamorouspage';
import Elegancepage from './pages/Sub-pages/Elegancepage';
import Summerstylepage from './pages/Sub-pages/Summerstylepage';
import Trendingproductpage from './pages/Sub-pages/Trendingproductpage';
import Urbanpage from './pages/Sub-pages/Urbanpage';
import Facedbeautypage from './pages/Sub-pages/Facedbeautypage';
import Summerescapades from './pages/Sub-pages/Summerescapades';
import LimitedEditionpage from './pages/Sub-pages/LimitedEditionpage';
import Endofseason from './pages/Sub-pages/Endofseason';
import Skincarepage from './pages/Sub-pages/Skincarepage';
import Ecomusheadphones from './pages/Sub-pages/Ecomusheadphones';
import Giftcardspage from './pages/Sub-pages/Giftcardspage';
import Moderndiningpage from './pages/Sub-pages/Moderndiningpage';
import Qualitychairspage from './pages/Sub-pages/Qualitychairspage';
import Moderndesignpage from './pages/Sub-pages/Moderndesignpage';
import Simplysicspage from './pages/Sub-pages/Simplysicspage';
import Summershoespage from './pages/Sub-pages/Summershoespage';
import Kitchenwearpage from './pages/Sub-pages/Kitchenwearpage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="all" element={<All />} />
        <Route path="fashion" element={<Fashion />} />
        <Route path="accessories" element={<Accessories1 />} />
        <Route path="furniture1" element={<Furniture1 />} />
        <Route path="electronics" element={<Electronics />} />
        <Route path="others" element={<Others />} />
        <Route path="glamorous" element={<Glamorouspage />} />
        <Route path="elegance" element={<Elegancepage />} />
        <Route path="summerstyle" element={<Summerstylepage />} />
        <Route path="trendingproduct" element={<Trendingproductpage />} />
        <Route path="urbanpage" element={<Urbanpage />} />
        <Route path="facebeautypage" element={<Facedbeautypage />} />
        <Route path="summer" element={<Summerescapades />} />
        <Route path="limited" element={<LimitedEditionpage />} />
        <Route path="season" element={<Endofseason />} />
        <Route path="skincare" element={<Skincarepage />} />
        <Route path="headphones" element={<Ecomusheadphones />} />
        <Route path="giftcards" element={<Giftcardspage />} />
        <Route path="diningpage" element={<Moderndiningpage />} />
        <Route path="chairpage" element={<Qualitychairspage />} />
        <Route path="mobilepage" element={<Moderndesignpage />} />
        <Route path="kidspage" element={<Simplysicspage />} />
        <Route path="shoespage" element={<Summershoespage />} />
        <Route path="kitchenpage" element={<Kitchenwearpage />} />
      </Routes>
    </div>
  );
};

export default App;