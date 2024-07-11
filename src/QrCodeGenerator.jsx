import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

import styles from './qrCodeGenerator.module.css';

const QrCodeGenerator = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const onClickHandler = () => {
    setResult(value);
    setValue('');
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
    setResult('');
  };

  return (
    <div className={styles.container}>
      <input
        type='text'
        value={value}
        onChange={onChangeHandler}
        className={styles.result}
        placeholder='Введите текст...'
      />
      <button type='button' onClick={onClickHandler} className={styles.btn}>
        Сгенерировать QR
      </button>
      {result !== '' && <QRCodeSVG value={result} size={220} />}
    </div>
  );
};

export default QrCodeGenerator;
