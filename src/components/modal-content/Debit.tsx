import React, { useState, useEffect } from 'react';
import { Label } from "../ui/label";
import Cookies from 'js-cookie';
import axios from 'axios';

interface Bank {
  code: string;
  name: string;
}

const Debit: React.FC = () => {
  const [banks, setBanks] = useState<Bank[]>([]);
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [accountError, setAccountError] = useState<string | null>(null);
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [accountName, setAccountName] = useState<string | null>(null);
  const [amount, setAmount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isValidationTriggered, setIsValidationTriggered] = useState(false);
  const [hasBeenValidated, setHasBeenValidated] = useState(false);
  const [insufficientFundsMessage, setInsufficientFundsMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchBanks = async () => {
      const token = Cookies.get('token');

      if (!token) {
        setGlobalError('Token not found');
        return;
      }

      try {
        const response = await axios.get('https://api.play2win.com.ng/api/v1/withdrawal/bank-list', {
          headers: { 
            'Accept': 'application/json', 
            'Authorization': `Bearer ${token}`
          }
        });
        setBanks(response.data.data);
      } catch (err) {
        console.error('Error fetching bank list:', err);
        setGlobalError('An error occurred while fetching the bank list');
      }
    };

    fetchBanks();
  }, []);

  const handleBankChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedBankCode = e.target.value;
    const bank = banks.find((bank) => bank.code === selectedBankCode) || null;
    setSelectedBank(bank);
    setAccountNumber(''); // Reset account number if bank changes
    setAccountError(null); // Clear account-specific error when bank changes
    setAccountName(null); // Clear account name when bank changes
    setAmount(0); // Reset amount when bank changes
    localStorage.removeItem('bankDetails'); // Clear previously saved details if bank is changed
  };

  const handleAccountNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    if (/^\d*$/.test(input) && input.length <= 10) {
      setAccountNumber(input);

      if (input.length === 10) {
        setAccountError(null); // Clear the error if the account number is valid
      } else {
        setAccountError('Account number must be exactly 10 digits');
      }
    }
  };

  const validateAccount = async (accountNumber: string, bankCode: string) => {
    const token = Cookies.get('token') || '';
    if (!token) {
      setAccountError('Authorization token is missing');
      return;
    }

    try {
      const response = await axios.post('https://api.play2win.com.ng/api/v1/withdrawal/validate', {
        account_number: accountNumber,
        bank_code: bankCode
      }, {
        headers: { 
          'Content-Type': 'application/json', 
          'Accept': 'application/json', 
          'Authorization': `Bearer ${token}`
        }
      });
      setAccountName(response.data.data.account_name);
    } catch (error) {
      console.error('Error validating account:', error);
      setAccountError('An error occurred while validating the account');
    }
  };

  const handleWithdraw = async () => {
    if (!selectedBank || !accountNumber || !accountName || amount <= 0) {
      setGlobalError('Please fill in all required fields');
      return;
    }
  
    setIsLoading(true);
  
    try {
      const response = await axios.post('https://api.play2win.com.ng/api/v1/withdrawal/transfer', {
        account_number: accountNumber,
        bank_code: selectedBank.code,
        amount: amount.toString(),
        recipient_name: accountName,
        ref: 'Transfer'
      }, {
        headers: { 
          'Content-Type': 'application/json', 
          'Accept': 'application/json', 
          'Authorization': `Bearer ${Cookies.get('token') || ''}`
        }
      });
  
      console.log('Withdrawal successful:', response.data);
      alert('Withdrawal successful!');
      window.location.reload();
  
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        if (status === 400) {
          setInsufficientFundsMessage('Insufficient funds in wallet');
          alert('Insufficient funds in wallet');
        } else {
          setGlobalError(`An error occurred during withdrawal. Status: ${status}`);
          alert(`An error occurred during withdrawal. Status: ${status}`);
        }
      } else {
        setGlobalError('An unexpected error occurred during withdrawal');
        alert('An unexpected error occurred during withdrawal');
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  

  useEffect(() => {
    const savedDetails = localStorage.getItem('bankDetails');
    if (savedDetails) {
      const { accountNumber, bankCode } = JSON.parse(savedDetails);
      if (accountNumber && bankCode && !isValidationTriggered) {
        validateAccount(accountNumber, bankCode);
        setIsValidationTriggered(true);
      }
    }
  }, [isValidationTriggered]);

  useEffect(() => {
    if (accountNumber.length >= 10 && !isValidationTriggered) {
      validateAccount(accountNumber, selectedBank?.code || '');
      setIsValidationTriggered(true);
    }
  }, [accountNumber, selectedBank, isValidationTriggered]);

  useEffect(() => {
    if (accountNumber.length >= 10 && !hasBeenValidated) {
      validateAccount(accountNumber, selectedBank?.code || '');
      setHasBeenValidated(true);
    }
  }, [accountNumber, selectedBank, hasBeenValidated]);

  

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-[32px] text-white font-NunitoSans font-semibold">
        Withdrawal
      </h1>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <Label htmlFor="bank" className="text-white font-NunitoSans">
            Bank
          </Label>

          <select
            title="bank"
            id="bank"
            value={selectedBank?.code || ''}
            onChange={handleBankChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select a bank</option>
            {banks.map((bank) => (
              <option key={bank.code} value={bank.code}>
                {bank.name}
              </option>
            ))}
          </select>
        </div>

        {selectedBank && (
          <div>
            <Label htmlFor="account-number" className="text-white font-NunitoSans">
              Account number
            </Label>

            <input
              type="text"
              id="accountNumber"
              value={accountNumber}
              onChange={handleAccountNumberChange}
              className={`mt-1 block w-full px-3 py-2 border ${
                accountNumber.length === 10
                  ? 'border-green-500'
                  : accountNumber.length > 0
                  ? 'border-red-500'
                  : 'border-gray-300'
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              maxLength={10}
              placeholder="Enter 10-digit account number"
            />
            {accountName && <p className="mt-3 text-sm text-green-500">Account Name: {accountName}</p>}

            {accountName && (
              <div>
                <input
                  type="number"
                  id="amount"
                  value={amount === 0 ? '' : amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  min="1"
                  placeholder="Enter amount"
                />
                <button
                  onClick={handleWithdraw}
                  className="mt-4 rounded-[100px] p-3 h-[40px] uppercase text-xs text-white font-NunitoSans font-bold border w-full bg-[#E903E733] hover:border-[#F002EE] hover:bg-gray-700"
                  disabled={isLoading}
                >
                  {isLoading ? 'Withdrawing...' : 'Withdraw'}
                </button>

              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Debit;
