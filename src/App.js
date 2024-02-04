import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useParams }
  from 'react-router-dom';


import Header from './components/header';
import Footer from './components/footer';

import Home from './pages/index';
import About from './pages/about';
import About_Missions from './pages/about/mission';
import About_Team from './pages/about/our-team';
import About_Testimonials from './pages/about/testimonials';
import Whatwedo from './pages/what-we-do';
import Whatwedo_ChildhoodCancer from './pages/what-we-do/childhood-cancer';
import Whatwedo_Diabetes from './pages/what-we-do/diabetes';
import Whatwedo_Environment from './pages/what-we-do/environment';
import Whatwedo_Hunger from './pages/what-we-do/hunger';
import Whatwedo_Vision from './pages/what-we-do/vision';
import Events from './pages/events';
import Events_PhotoGallery from './pages/events/photo-gallery';
import Events_ComebeaLion from './pages/events/come-be-a-lion';
import Resources from './pages/resources';
import OperationalResources from './pages/resources/operational-resources';
import Collaterals from './pages/resources/collaterals';
import Sponsors from './pages/sponsors';
import GlobalSponsors from './pages/sponsors/global-sponsors';
import Partnerwithus from './pages/sponsors/partner-with-us';
import Contact from './pages/contact';
import Explain from './pages/what-we-do/explain';
import SpringFoodFest2023 from './pages/events/event-page-description';
import store from './redux/store'
import { getActivePageInfo } from './redux/action/others/other';
import LocalSponsors from './pages/sponsors/local-sponsors';

function App() {

  return (
    <HelmetProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />

          <Route path='/about' element={<About />} />
          <Route path='/about/mission' element={<About_Missions />} />
          <Route path='/about/our-team' element={<About_Team />} />
          <Route path='/about/testimonials' element={<About_Testimonials />} />

          <Route path='/what-we-do' element={<Whatwedo />} />
          {/* <Route path='/what-we-do/childhood-cancer' element={<Whatwedo_ChildhoodCancer />} />
          <Route path='/what-we-do/diabetes' element={<Whatwedo_Diabetes />} />
          <Route path='/what-we-do/environment' element={<Whatwedo_Environment />} />
          <Route path='/what-we-do/hunger' element={<Whatwedo_Hunger />} />
          <Route path='/what-we-do/vision' element={<Whatwedo_Vision />} /> */}
          <Route path={`/what-we-do/:subsection`} element={<Explain />} />

          <Route path='/events' element={<Events />} />
          <Route path='/events/photo-gallery' element={<Events_PhotoGallery />} />
          <Route path='/events/come-be-a-lion' element={<Events_ComebeaLion />} />
          <Route path={`/:title/:id`} element={<SpringFoodFest2023 />} />

          <Route path='/resources' element={<Resources />} />
          <Route path='/resources/operational-resources' element={<OperationalResources />} />
          <Route path='/resources/collaterals' element={<Collaterals />} />

          <Route path='/sponsors' element={<Sponsors />} />
          <Route path='/sponsors/global-sponsors' element={<GlobalSponsors />} />

          <Route path='/sponsors/local-sponsors' element={<LocalSponsors />} />
          <Route path='/sponsors/partner-with-us' element={<Partnerwithus />} />

          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
