import { useState } from 'react';
import { QrScanner } from 'react-qrcode-scanner';

import styles from './qrCodeScanner.module.css';

const QrCodeScanner = () => {
  const handleScan = (value) => {
    console.log({ value });
    setValue(value);
  };

  const handleError = (error) => {
    console.log({ error });
  };

  const [value, setValue] = useState('');

  const viewFinder = {
    border: '10px solid rgba(255,255,255,0.3)',
    position: 'absolute',
    borderRadius: '5px',
    width: '250px',
    height: '250px',
  };

  return (
    <div className={styles.container}>
      <QrScanner
        onScan={handleScan}
        onError={handleError}
        viewFinder={viewFinder}
        style={{
          width: 300,
          height: 300,
        }}
        aspectRatio={'3:3'}
      />
      <div className={styles.result}>{value}</div>
    </div>
  );
};

export default QrCodeScanner;
