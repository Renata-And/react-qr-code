import { Routes, Route } from 'react-router-dom';

import QrCodeGenerator from './components/QrCodeGeneration';
import QrCodeScanner from './components/QrCodeScanner';
import Navigation from './components/Navigation';

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/generate' element={<QrCodeGenerator />} />
        <Route path='/scan' element={<QrCodeScanner />} />
      </Routes>
    </div>
  );
};

export default Layout;
