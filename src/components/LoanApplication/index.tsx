import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import RoleSelection from './RoleSelection';
import LoanTerms from './LoanTerms';
import PersonalInfo from './PersonalInfo';
import CreditCardInfo from './CreditCardInfo';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

type Role = 'lender' | 'borrower' | null;

const getSteps = (role: Role) => [
  role === 'lender' ? 'Investment Terms' : 'Loan Terms',
  'Personal Information',
  'Payment Details'
];

const getValidationSchema = (role: Role, step: number) => {
  const baseSchemas = [
    // Step 1: Terms validation
    Yup.object({
      loanAmount: Yup.number()
        .required('Required')
        .min(role === 'lender' ? 5000 : 1000, 
          `Minimum ${role === 'lender' ? 'investment' : 'loan'} amount is $${role === 'lender' ? '5,000' : '1,000'}`),
      loanTerm: Yup.number()
        .required('Required')
        .min(6, 'Minimum term is 6 months'),
      interestRate: Yup.number()
        .required('Required')
        .min(1, 'Minimum rate is 1%')
        .max(30, 'Maximum rate is 30%'),
      ...(role === 'borrower' && {
        purpose: Yup.string().required('Required'),
      }),
    }),
    // Step 2: Personal Information validation
    Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      phone: Yup.string().required('Required'),
      address: Yup.string().required('Required'),
    }),
    // Step 3: Payment Information validation
    Yup.object({
      cardNumber: Yup.string().required('Required').matches(/^\d{16}$/, 'Invalid card number'),
      cardName: Yup.string().required('Required'),
      expiryDate: Yup.string().required('Required').matches(/^\d{2}\/\d{2}$/, 'Invalid expiry date'),
      cvv: Yup.string().required('Required').matches(/^\d{3,4}$/, 'Invalid CVV'),
    }),
  ];

  return baseSchemas[step];
};

const initialValues = {
  loanAmount: '',
  loanTerm: '',
  interestRate: '',
  purpose: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  cardNumber: '',
  cardName: '',
  expiryDate: '',
  cvv: '',
};

export default function LoanApplication() {
  const [role, setRole] = useState<Role>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = getSteps(role);

  const handleSubmit = (values: any) => {
    if (currentStep === steps.length - 1) {
      console.log('Form submitted:', { role, ...values });
      // Handle form submission
    }
  };

  if (!role) {
    return (
      <div className="min-h-screen pt-20 pb-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <RoleSelection onSelect={setRole} />
        </div>
      </div>
    );
  }

  const renderStepContent = (step: number, formikProps: any) => {
    switch (step) {
      case 0:
        return <LoanTerms formikProps={formikProps} role={role} />;
      case 1:
        return <PersonalInfo formikProps={formikProps} />;
      case 2:
        return <CreditCardInfo formikProps={formikProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            {role === 'lender' ? 'Investment Application' : 'Loan Application'}
          </h2>
          <div className="mt-4">
            <div className="flex justify-center">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      index <= currentStep ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {index < currentStep ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-20 h-1 mx-2 ${
                        index < currentStep ? 'bg-primary-600' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-2">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`mx-8 text-sm ${
                    index <= currentStep ? 'text-primary-600' : 'text-gray-500'
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={getValidationSchema(role, currentStep)}
          onSubmit={handleSubmit}
        >
          {(formikProps) => (
            <Form className="bg-white shadow-lg rounded-lg p-8">
              {renderStepContent(currentStep, formikProps)}

              <div className="mt-8 flex justify-between">
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Previous
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => {
                    formikProps.validateForm().then((errors) => {
                      if (Object.keys(errors).length === 0) {
                        if (currentStep === steps.length - 1) {
                          formikProps.handleSubmit();
                        } else {
                          setCurrentStep(currentStep + 1);
                        }
                      } else {
                        formikProps.submitForm(); // This will trigger the display of validation errors
                      }
                    });
                  }}
                  className="flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 ml-auto"
                >
                  {currentStep === steps.length - 1 ? (
                    'Submit Application'
                  ) : (
                    <>
                      Next
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}