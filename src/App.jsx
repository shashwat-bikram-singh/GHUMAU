import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

// Core Pages
import Home from './pages/Home';
import Explore from './pages/Explore';
import DestinationDetails from './pages/DestinationDetails';
import TripPlanner from './pages/TripPlanner';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Bookings from './pages/Bookings';
import Community from './pages/Community';
import LocalEats from './pages/LocalEats';
import PackingList from './pages/PackingList';
import Activities from './pages/Activities';
import Reviews from './pages/Reviews';
import Profile from './pages/Profile';
import SavedTrips from './pages/SavedTrips';

// Generated Stitch Pages
import MustVisitPlaces from './pages/MustVisitPlaces';
import ActivityCategories from './pages/ActivityCategories';
import ActivityCategoriesWithPriceFilter from './pages/ActivityCategoriesWithPriceFilter';
import BudgetActivityCategories from './pages/BudgetActivityCategories';
import LowBudgetActivityCategoriesHd from './pages/LowBudgetActivityCategoriesHd';
import MidRangeActivityCategories from './pages/MidRangeActivityCategories';
import BookYourStay from './pages/BookYourStay';
import BudgetHotelBooking from './pages/BudgetHotelBooking';
import LowBudgetHotelBookingHd from './pages/LowBudgetHotelBookingHd';
import MidRangeStaysMap from './pages/MidRangeStaysMap';
import HotelsInKathmandu from './pages/HotelsInKathmandu';
import LocalEatsBudgetDiningInNepal from './pages/LocalEatsBudgetDiningInNepal';
import LowBudgetLocalEatsHd from './pages/LowBudgetLocalEatsHd';
import MidRangeDiningGuide from './pages/MidRangeDiningGuide';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Wrapper for AnimatePresence to work with Routes
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Core Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/destination/:id" element={<DestinationDetails />} />
        <Route path="/planner" element={<TripPlanner />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/community" element={<Community />} />
        <Route path="/dining" element={<LocalEats />} />
        <Route path="/packing-list" element={<PackingList />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/saved-trips" element={<SavedTrips />} />

        {/* Additional Generated Routes */}
        <Route path="/places/must-visit" element={<MustVisitPlaces />} />
        <Route path="/activities/all-categories" element={<ActivityCategories />} />
        <Route path="/activities/price-filter" element={<ActivityCategoriesWithPriceFilter />} />
        <Route path="/activities/budget" element={<BudgetActivityCategories />} />
        <Route path="/activities/budget-hd" element={<LowBudgetActivityCategoriesHd />} />
        <Route path="/activities/mid-range" element={<MidRangeActivityCategories />} />
        <Route path="/stays/book" element={<BookYourStay />} />
        <Route path="/stays/budget" element={<BudgetHotelBooking />} />
        <Route path="/stays/budget-hd" element={<LowBudgetHotelBookingHd />} />
        <Route path="/stays/mid-range-map" element={<MidRangeStaysMap />} />
        <Route path="/stays/kathmandu" element={<HotelsInKathmandu />} />
        <Route path="/dining/nepal-budget" element={<LocalEatsBudgetDiningInNepal />} />
        <Route path="/dining/low-budget-hd" element={<LowBudgetLocalEatsHd />} />
        <Route path="/dining/mid-range-guide" element={<MidRangeDiningGuide />} />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-surface">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
