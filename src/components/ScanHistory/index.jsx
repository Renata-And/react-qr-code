import { QRCodeSVG } from 'qrcode.react';
import { SCAN_DATA } from '../../constants';

import styles from './scanHistory.module.css';

const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

  console.log(data);

  return (
    <div className={styles.container}>
      {data.map((text, i) => (
        <div key={i}>
          <p className={styles.text}>{text}</p>
          <QRCodeSVG value={text} size={180} />
        </div>
      ))}
    </div>
  );
};

export default ScanHistory;
