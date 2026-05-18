/**
 * GHUMAU - Modern Travel Platform for Nepal
 * Built with the "Alpine Sanctuary" Design System
 */
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

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
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

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

const appRoutes = [
  { path: '/', component: Home },
  { path: '/explore', component: Explore },
  { path: '/destination/:id', component: DestinationDetails },
  { path: '/planner', component: TripPlanner },
  { path: '/dashboard', component: Dashboard },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/bookings', component: Bookings },
  { path: '/community', component: Community },
  { path: '/dining', component: LocalEats },
  { path: '/packing-list', component: PackingList },
  { path: '/activities', component: Activities },
  { path: '/reviews', component: Reviews },
  { path: '/profile', component: Profile },
  { path: '/saved-trips', component: SavedTrips },
  { path: '/privacy', component: Privacy },
  { path: '/terms', component: Terms },
  { path: '/places/must-visit', component: MustVisitPlaces },
  { path: '/activities/all-categories', component: ActivityCategories },
  { path: '/activities/price-filter', component: ActivityCategoriesWithPriceFilter },
  { path: '/activities/budget', component: BudgetActivityCategories },
  { path: '/activities/budget-hd', component: LowBudgetActivityCategoriesHd },
  { path: '/activities/mid-range', component: MidRangeActivityCategories },
  { path: '/stays/book', component: BookYourStay },
  { path: '/stays/budget', component: BudgetHotelBooking },
  { path: '/stays/budget-hd', component: LowBudgetHotelBookingHd },
  { path: '/stays/mid-range-map', component: MidRangeStaysMap },
  { path: '/stays/kathmandu', component: HotelsInKathmandu },
  { path: '/dining/nepal-budget', component: LocalEatsBudgetDiningInNepal },
  { path: '/dining/low-budget-hd', component: LowBudgetLocalEatsHd },
  { path: '/dining/mid-range-guide', component: MidRangeDiningGuide },
];

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {appRoutes.map(({ path, component: Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <PageTransition>
                <Component />
              </PageTransition>
            }
          />
        ))}
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />
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

