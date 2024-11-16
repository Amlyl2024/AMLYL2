import React from 'react';
import { FormikProps } from 'formik';
import { Info } from 'lucide-react';

interface Props {
  formikProps: FormikProps<any>;
  role: 'lender' | 'borrower';
}

export default function LoanTerms({ formikProps, role }: Props) {
  const { values, errors, touched, handleChange, handleBlur } = formikProps;

  const calculateMonthlyPayment = () => {
    if (!values.loanAmount || !values.loanTerm || !values.interestRate) return 0;
    const principal = Number(values.loanAmount);
    const monthlyRate = Number(values.interestRate) / 100 / 12;
    const numberOfPayments = Number(values.loanTerm);
    
    const monthlyPayment = 
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    return Math.round(monthlyPayment);
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">
          {role === 'lender' ? 'Investment Amount ($)' : 'Loan Amount ($)'}
        </label>
        <input
          type="number"
          id="loanAmount"
          name="loanAmount"
          value={values.loanAmount}
          onChange={handleChange}
          onBlur={handleBlur}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
        {touched.loanAmount && errors.loanAmount && (
          <p className="mt-2 text-sm text-red-600">{errors.loanAmount}</p>
        )}
      </div>

      <div>
        <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700">
          {role === 'lender' ? 'Investment Term (months)' : 'Loan Term (months)'}
        </label>
        <input
          type="number"
          id="loanTerm"
          name="loanTerm"
          value={values.loanTerm}
          onChange={handleChange}
          onBlur={handleBlur}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
        {touched.loanTerm && errors.loanTerm && (
          <p className="mt-2 text-sm text-red-600">{errors.loanTerm}</p>
        )}
      </div>

      <div>
        <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700">
          Interest Rate (% APR)
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="number"
            step="0.1"
            id="interestRate"
            name="interestRate"
            value={values.interestRate}
            onChange={handleChange}
            onBlur={handleBlur}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <Info className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
        </div>
        {touched.interestRate && errors.interestRate && (
          <p className="mt-2 text-sm text-red-600">{errors.interestRate}</p>
        )}
        <p className="mt-1 text-sm text-gray-500">
          {role === 'lender' 
            ? 'Expected return rate. Higher rates may take longer to match with borrowers.'
            : 'Proposed interest rate. Lower rates may increase chances of finding lenders.'}
        </p>
      </div>

      {role === 'borrower' && (
        <div>
          <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">
            Loan Purpose
          </label>
          <select
            id="purpose"
            name="purpose"
            value={values.purpose}
            onChange={handleChange}
            onBlur={handleBlur}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
            <option value="">Select a purpose</option>
            <option value="business">Business</option>
            <option value="education">Education</option>
            <option value="personal">Personal</option>
            <option value="home">Home Improvement</option>
            <option value="debt">Debt Consolidation</option>
          </select>
          {touched.purpose && errors.purpose && (
            <p className="mt-2 text-sm text-red-600">{errors.purpose}</p>
          )}
        </div>
      )}

      <div className="bg-gray-50 p-4 rounded-md">
        <h4 className="text-sm font-medium text-gray-900">
          {role === 'lender' ? 'Expected Monthly Return' : 'Estimated Monthly Payment'}
        </h4>
        <p className="mt-1 text-3xl font-bold text-primary-600">
          ${calculateMonthlyPayment() || 0}
        </p>
        <p className="mt-1 text-sm text-gray-500">
          {role === 'lender'
            ? '*Expected returns before fees and taxes'
            : '*Estimated payment includes principal and interest'}
        </p>
      </div>
    </div>
  );
}