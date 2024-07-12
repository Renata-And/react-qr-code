import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from '../../constants';

import styles from './generateHistory.module.css';

const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

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

export default GenerateHistory;
