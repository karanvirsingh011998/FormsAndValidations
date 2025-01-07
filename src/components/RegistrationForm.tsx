import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormInput } from './FormInput';
import { CheckCircle2 } from 'lucide-react';

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required'),
  dateOfBirth: Yup.date()
    .max(new Date(), 'Date cannot be in the future')
    .required('Required'),
  gender: Yup.string()
    .oneOf(['male', 'female', 'other'], 'Please select a valid option')
    .required('Required'),
  occupation: Yup.string()
    .required('Required'),
  phoneNumber: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number')
    .required('Required'),
  terms: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions')
});

export const RegistrationForm = () => {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    gender: '',
    occupation: '',
    phoneNumber: '',
    terms: false
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
        <p className="mt-2 text-gray-600">Join our community today</p>
      </div>

      {isSubmitSuccessful && (
        <div className="mb-6 p-4 bg-green-50 rounded-lg flex items-center gap-2 text-green-700">
          <CheckCircle2 className="h-5 w-5" />
          <span>Registration successful!</span>
        </div>
      )}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          console.log(values);
          setIsSubmitSuccessful(true);
          resetForm();
          setTimeout(() => setIsSubmitSuccessful(false), 3000);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <FormInput
                label="First Name"
                name="firstName"
                placeholder="John"
              />
              <FormInput
                label="Last Name"
                name="lastName"
                placeholder="Doe"
              />
            </div>

            <FormInput
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput
                label="Password"
                name="password"
                type="password"
              />
              <FormInput
                label="Confirm Password"
                name="confirmPassword"
                type="password"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput
                label="Date of Birth"
                name="dateOfBirth"
                type="date"
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gender
                </label>
                <Field
                  as="select"
                  name="gender"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Field>
                <ErrorMessage
                  name="gender"
                  component="p"
                  className="mt-1 text-sm text-red-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Occupation
                </label>
                <Field
                  as="select"
                  name="occupation"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="">Select Occupation</option>
                  <option value="student">Student</option>
                  <option value="employed">Employed</option>
                  <option value="self-employed">Self Employed</option>
                  <option value="other">Other</option>
                </Field>
                <ErrorMessage
                  name="occupation"
                  component="p"
                  className="mt-1 text-sm text-red-600"
                />
              </div>
              <FormInput
                label="Phone Number"
                name="phoneNumber"
                type="tel"
                placeholder="+1234567890"
              />
            </div>

            <div className="flex items-center gap-2 bg-gray-50 p-4 rounded-lg">
              <Field
                type="checkbox"
                name="terms"
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I accept the terms and conditions
              </label>
              <ErrorMessage
                name="terms"
                component="p"
                className="text-sm text-red-600"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? 'Creating account...' : 'Create Account'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}; 