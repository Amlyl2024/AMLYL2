import React from 'react';
import { FormikProps } from 'formik';
import { CreditCard } from 'lucide-react';

interface Props {
  formikProps: FormikProps<any>;
}

export default function CreditCardInfo({ formikProps }: Props) {
  const { values, errors, touched, handleChange, handleBlur } = formikProps;

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 p-4 rounded-md flex items-center space-x-3">
        <CreditCard className="h-6 w-6 text-primary-600" />
        <p className="text-sm text-gray-600">
          Your payment information is encrypted and secure
        </p>
      </div>

      <div>
        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={values.cardNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="1234 5678 9012 3456"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
        {touched.cardNumber && errors.cardNumber && (
          <p className="mt-2 text-sm text-red-600">{errors.cardNumber}</p>
        )}
      </div>

      <div>
        <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">
          Name on Card
        </label>
        <input
          type="text"
          id="cardName"
          name="cardName"
          value={values.cardName}
          onChange={handleChange}
          onBlur={handleBlur}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
        {touched.cardName && errors.cardName && (
          <p className="mt-2 text-sm text-red-600">{errors.cardName}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
            Expiry Date
          </label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={values.expiryDate}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="MM/YY"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
          {touched.expiryDate && errors.expiryDate && (
            <p className="mt-2 text-sm text-red-600">{errors.expiryDate}</p>
          )}
        </div>

        <div>
          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={values.cvv}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="123"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
          {touched.cvv && errors.cvv && (
            <p className="mt-2 text-sm text-red-600">{errors.cvv}</p>
          )}
        </div>
      </div>
    </div>
  );
}