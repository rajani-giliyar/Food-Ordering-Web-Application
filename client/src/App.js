// App.js
import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import UserRegister from './components/pages/UserRegister';
import UserLogin from './components/pages/UserLogin';
import MainComponent from './components/MainComponent/MainComponent';
import { Toaster } from 'react-hot-toast';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header/Header';
import AddRestaurantPage from './components/header/AddRestaurantPage';
import Addcart from './components/header/Addcart';
import SignOutPage from './components/header/SignOutPage';
import AddingFoodItems from './components/Restaurant/AddingFoodItems.js';
import ViewFoodItems from './components/Restaurant/ViewFoodItems.js';

function App() {
  const location = useLocation();

  
  const showNavbar = location.pathname === '/register' || location.pathname === '/';
  const showHeader = location.pathname === '/home';

  return (
    <div className="App">
      {showNavbar && <Navbar />}
      {showHeader && <Header />}
      
      <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<UserRegister />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/home" element={<MainComponent />} />
        <Route path="/addrestaurant" element={<AddRestaurantPage />} />
        <Route path="/cart" element={<Addcart />} />
        <Route path="/signout" element={<SignOutPage />} />
        <Route path="/addingfooditems" element={<AddingFoodItems />} />
        <Route path="/viewfooditem" element={<ViewFoodItems />} />
        {/* <Route path="/edit/:id" render={(props) => <EditFoodItemPage {...props} />} /> */}
      </Routes>
    </div>
  );
}

export default App;





































