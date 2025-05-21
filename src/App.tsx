import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import WalletContextProvider  from './component/WalletContext';;


const App = () => {
  return (
    <WalletContextProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </Layout>
      </Router>
      </WalletContextProvider>
  );
};

export default App;