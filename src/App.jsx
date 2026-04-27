import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Explore from './pages/Explore';
import DestinationDetails from './pages/DestinationDetails';
import TripPlanner from './pages/TripPlanner';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Register from './pages/Register';
import Bookings from './pages/Bookings';
import Community from './pages/Community';
import LocalEats from './pages/LocalEats';
import PackingList from './pages/PackingList';
import Activities from './pages/Activities';
import Reviews from './pages/Reviews';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
