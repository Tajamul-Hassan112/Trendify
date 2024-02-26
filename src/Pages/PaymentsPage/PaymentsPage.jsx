import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faWallet, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import { ShopContext } from '../../Context/ShopContext';
import './PaymentsPage.css';

const PaymentsPage = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    walletEmail: '',
    cashAmount: '',
  });
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handlePaymentMethodSelect = (method) => {
    setSelectedMethod(method);
    // Clear form data when selecting a different payment method
    setFormData({
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      walletEmail: '',
      cashAmount: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Simulate payment process here
    console.log('Processing payment...');
    console.log('Selected Payment Method:', selectedMethod);
    console.log('Form Data:', formData);
    // Reset form data after fake payment
    setFormData({
      ...formData,
      cvv: '•••', // Mask CVV input with dots
    });
    setOrderConfirmed(true);
  };

  return (
    <div className="container mx-auto mt-8 payments-page">
      <h1 className="text-3xl font-semibold mb-4">Choose Payment Method</h1>
      <div className="payment-methods">
        <button
          className={`payment-method ${selectedMethod === 'creditCard' ? 'selected' : ''}`}
          onClick={() => handlePaymentMethodSelect('creditCard')}
        >
          <FontAwesomeIcon icon={faCreditCard} className="payment-icon" />
          Credit Card
        </button>
        <button
          className={`payment-method ${selectedMethod === 'wallet' ? 'selected' : ''}`}
          onClick={() => handlePaymentMethodSelect('wallet')}
        >
          <FontAwesomeIcon icon={faWallet} className="payment-icon" />
          Wallet
        </button>
        <button
          className={`payment-method ${selectedMethod === 'cash' ? 'selected' : ''}`}
          onClick={() => handlePaymentMethodSelect('cash')}
        >
          <FontAwesomeIcon icon={faMoneyBillAlt} className="payment-icon" />
          Cash
        </button>
      </div>

      {/* Payment Form */}
      {selectedMethod && (
        <form className="payment-form mt-8" onSubmit={handlePaymentSubmit}>
          {selectedMethod === 'creditCard' && (
            <div className="credit-card-fields">
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="Card Number"
                className="input-field"
                required
              />
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                placeholder="Expiry Date"
                className="input-field"
                required
              />
              <input
                type="password"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                placeholder="CVV"
                className="input-field"
                maxLength="3"
                required
              />
            </div>
          )}
          {selectedMethod === 'wallet' && (
            <div className="wallet-fields">
              <input
                type="email"
                name="walletEmail"
                value={formData.walletEmail}
                onChange={handleInputChange}
                placeholder="Wallet Email"
                className="input-field"
                required
              />
            </div>
          )}
          {selectedMethod === 'cash' && (
            <div className="cash-fields">
              <input
                type="number"
                name="cashAmount"
                value={formData.cashAmount}
                onChange={handleInputChange}
                placeholder="Cash Amount"
                className="input-field"
                required
              />
            </div>
          )}
          <div className="text-center mt-4">
            <button
              type="submit"
              className="pay-button"
            >
              Pay Now (${getTotalCartAmount()})
            </button>
          </div>
        </form>
      )}

      {/* Order Confirmation */}
      {orderConfirmed && (
        <div className="order-confirmation mt-8">
          <h2 className="text-2xl font-semibold mb-2">Order Confirmed!</h2>
          <p>Your payment has been processed successfully.</p>
        </div>
      )}
    </div>
  );
};

export default PaymentsPage;
