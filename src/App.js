import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Header from "./component/header";
import Footer from "./component/footer";
import Home from "./component/home";

import PrivacyPolicy from "./component/privacy-policy";
import TermCondition from "./component/term-condition";

// Scroll to top on route change
const ScrollToTopOnRouteChange = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top of the page on route change
  }, [location.pathname]);

  return null;
};

// App component without the BrowserRouter
function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTopOnRouteChange />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/term-condition" element={<TermCondition />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
