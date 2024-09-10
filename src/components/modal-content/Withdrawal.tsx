import React, { useState, useEffect } from 'react';
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from 'axios'; // Make sure axios is imported
import Cookies from "js-cookie";

// Helper function to format numbers with commas
const formatWithCommas = (value: string): string => {
    if (!value) return '';
    return value
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Regular expression to add commas
};

const parseWithoutCommas = (value: string): string => {
    return value.replace(/,/g, ''); // Remove commas for actual numeric value
};

const Withdrawal: React.FC = () => {
    const [amount, setAmount] = useState<string>('');
    const [accountNumber, setAccountNumber] = useState<string>('');
    const [accountName, setAccountName] = useState<string>(''); 
    const [banks, setBanks] = useState<{ code: string; name: string }[]>([]); // State for bank list
    const [loading, setLoading] = useState<boolean>(true); // State for loading
    const [error, setError] = useState<string | null>(null); // State for error handling

    // Fetch the list of banks when the component mounts
    useEffect(() => {
        // Fetch the token from cookies
        const token = Cookies.get('token');
        console.log('Login Password', token)

        if (!token) {
            setError('Token not found');
            setLoading(false);
            return;
        }

        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://api.play2win.com.ng/api/v1/withdrawal/bank-list',
            headers: { 
                'Accept': 'application/json', 
                'Authorization': `Bearer ${token}`
            }
        };
        
        axios.request(config)
           .then((response) => {
               console.log(response.data);
    
               // Parse the response data
               const parsedData = response.data.data || [];
               
               // Set the banks state
               setBanks(parsedData);
    
               setLoading(false);
           })
           .catch((error) => {
               console.error('Error fetching bank list', error.response?.data || error.message);
               setError(`Failed to fetch bank list: ${error.message}`);
               setLoading(false);
           });
    }, []);
    
    

    // Check if the account number is valid (10 digits)
    const isAccountNumberValid = accountNumber.length === 10;

    // Handle amount change and format it with commas
    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const numericValue = parseWithoutCommas(inputValue); // Remove commas to process numeric value
        setAmount(formatWithCommas(numericValue)); // Format the value with commas and update state
    };

    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-[32px] text-white font-NunitoSans font-semibold">
                Withdrawal
            </h1>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                    <Label
                        htmlFor="amount"
                        className="text-white font-NunitoSans"
                    >
                        Amount
                    </Label>
                    <Input
                        id="amount"
                        value={amount}
                        onChange={handleAmountChange} 
                        placeholder="₦"
                        className="col-span-3 outline-0"
                        type="text"
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <Label
                        htmlFor="account-number"
                        className="text-white font-NunitoSans"
                    >
                        Account number
                    </Label>
                    <Input
                        id="account-number"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        placeholder="Enter account number"
                        className={`col-span-3 outline-0 ${
                            accountNumber.length === 10
                                ? 'border-green-500'
                                : 'border-red-500'
                        } border`}
                        type="number"
                    />
                    {accountNumber.length !== 10 && (
                        <p className="text-red-500 text-sm">
                            Account number must be 10 digits.
                        </p>
                    )}
                </div>

                <div className="flex flex-col gap-3">
                    <Label htmlFor="bank" className="text-white font-NunitoSans">
                        Bank
                    </Label>
                    {loading ? (
                        <p className="text-white">Loading banks...</p>
                    ) : error ? (
                        <p className="text-red-500">{error}</p>
                    ) : (
                        <select
                            title="banks"
                            name="banks"
                            id="banks"
                            className="flex h-10 w-full rounded-[100px] border bg-white text-black px-3 py-2 text-sm"
                        >
                            <option value="">Select a bank</option>
                            {banks.map((bank) => (
                                <option key={bank.code} value={bank.code}>
                                    {bank.name}
                                </option>
                            ))}
                        </select>
                    )}
                </div>




                <div className="flex flex-col gap-3">
                    <Label
                        htmlFor="account-name"
                        className="text-white font-NunitoSans"
                    >
                        Account Name
                    </Label>
                    <Input
                        id="account-name"
                        value={accountName}
                        onChange={(e) => setAccountName(e.target.value)} 
                        placeholder="Enter account name"
                        className="col-span-3"
                        type="text"
                    />
                </div>
            </div>
            <div className="flex justify-end">
                <Button
                    disabled={!isAccountNumberValid}
                    className={`${
                        isAccountNumberValid
                            ? 'bg-[#E903E733]'
                            : 'bg-gray-500'
                    } rounded-[100px] w-full md:w-[151px] h-[32px] uppercase text-xs text-white font-NunitoSans font-bold border ${
                        isAccountNumberValid
                            ? 'border-[#F002EE]'
                            : 'border-gray-500'
                    }`}
                >
                    Continue
                </Button>
            </div>
        </div>
    );
};

export default Withdrawal;
