import React, { useState } from "react";
import QRCode from "qrcode";
import { Html5QrcodeScanner } from "html5-qrcode";

const QRApp = () => {
  const [qrText, setQrText] = useState(""); // Text for generating QR
  const [customMessage, setCustomMessage] = useState(""); // Message to send
  const [generatedQR, setGeneratedQR] = useState("");

  // Function to generate QR Code
  const generateQRCode = async () => {
    try {
      const qrCodeURL = await QRCode.toDataURL(qrText);
      setGeneratedQR(qrCodeURL);
    } catch (err) {
      console.error("Error generating QR code:", err);
    }
  };

  // Function to start the scanner
  const startQRScanner = () => {
    const qrCodeScanner = new Html5QrcodeScanner("qr-reader", {
      fps: 10,
      qrbox: 250,
    });

    qrCodeScanner.render(
      (decodedText) => {
        // Append the custom message to scanned URL
        const messageAppendedURL = `${decodedText}?message=${encodeURIComponent(
          customMessage
        )}`;
        alert(`Scanned Code with Message: ${messageAppendedURL}`);
      },
      (error) => {
        console.error("Scan error:", error);
      }
    );
  };

  return (
    <div className="min-h-screen text-black bg-gray-100 p-5 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-pink-500 mb-8">QR Code App</h1>

      {/* QR Code Generator Section */}
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4">Generate QR Code</h2>
        <input
          type="text"
          placeholder="Enter text to generate QR code"
          value={qrText}
          onChange={(e) => setQrText(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:ring focus:ring-pink-200"
        />
        <button
          onClick={generateQRCode}
          className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
        >
          Generate QR Code
        </button>
        {generatedQR && (
          <div className="mt-4 text-center">
            <img
              src={generatedQR}
              alt="Generated QR Code"
              className="inline-block border border-gray-300 rounded"
            />
          </div>
        )}
      </div>

      {/* QR Code Scanner Section */}
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Scan QR Code</h2>
        <input
          type="text"
          placeholder="Enter custom message to send"
          value={customMessage}
          onChange={(e) => setCustomMessage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:ring focus:ring-pink-200"
        />
        <button
          onClick={startQRScanner}
          className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
        >
          Start Scanner
        </button>
        <div id="qr-reader" className="mt-4"></div>
      </div>
    </div>
  );
};

export default QRApp;
