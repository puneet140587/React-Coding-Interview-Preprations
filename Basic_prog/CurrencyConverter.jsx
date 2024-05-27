/* Develop a currency converter application that allows users to input an amount in one currency and convert it to another. For the sake of this challenge, you can use a hard-coded exchange rate. Take advantage of React state and event handlers to manage the input and conversion calculations.
 */

import React, { useState } from "react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState("");

  // Hard-coded exchange rate (for demonstration)
  const exchangeRate = 0.85; // 1 USD = 0.85 EUR

  // Handle input change
  const handleInputChange = (e) => {
    setAmount(e.target.value);
  };

  // Handle currency selection change
  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  // Handle conversion
  const handleConvert = () => {
    const converted = amount * exchangeRate;
    setConvertedAmount(converted.toFixed(2)); // Round to 2 decimal places
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <div>
        <label>
          Amount:
          <input type="number" value={amount} onChange={handleInputChange} />
        </label>
      </div>
      <div>
        <label>
          From Currency:
          <select value={fromCurrency} onChange={handleFromCurrencyChange}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            {/* Add more currency options as needed */}
          </select>
        </label>
      </div>
      <div>
        <label>
          To Currency:
          <select value={toCurrency} onChange={handleToCurrencyChange}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            {/* Add more currency options as needed */}
          </select>
        </label>
      </div>
      <div>
        <button onClick={handleConvert}>Convert</button>
      </div>
      {convertedAmount && (
        <div>
          <p>
            Converted Amount: {convertedAmount} {toCurrency}
          </p>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
