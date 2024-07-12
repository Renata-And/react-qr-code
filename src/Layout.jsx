import { Routes, Route } from 'react-router-dom';

import QrCodeGenerator from './components/QrCodeGeneration';
import QrCodeScanner from './components/QrCodeScanner';
import Navigation from './components/Navigation';
import GenerateHistory from './components/GenerateHistory';
import ScanHistory from './components/ScanHistory';

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/generate' element={<QrCodeGenerator />} />
        <Route path='/scan' element={<QrCodeScanner />} />
        <Route path='/generateHistory' element={<GenerateHistory />} />
        <Route path='/scanHistory' element={<ScanHistory />} />
      </Routes>
    </div>
  );
};

export default Layout;
