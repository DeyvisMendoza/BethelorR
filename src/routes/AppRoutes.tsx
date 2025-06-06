import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Home } from '../pages/Home/Home';
import About from '../pages/About/About';
import { Services } from '../pages/Services/Services';
import { KitchenRemodeling } from '../pages/KitchenRemodeling/KitchenRemodeling';
import { Home } from '../pages/Home/Home';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/kitchen" element={<KitchenRemodeling />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
