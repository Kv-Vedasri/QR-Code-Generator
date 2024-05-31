import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './QRCodeGenerator.css';

const QRCodeGenerator = () => {
  const [text, setText] = useState('');
  const [qrCodeValue, setQRCodeValue] = useState('');

  const generateQRCode = () => {
    setQRCodeValue(text);
  };

  return (
    <div className="qr-code-generator">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={generateQRCode}>Generate</button>
      {qrCodeValue && (
        <div className="qr-code">
          <QRCode value={qrCodeValue} />
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
