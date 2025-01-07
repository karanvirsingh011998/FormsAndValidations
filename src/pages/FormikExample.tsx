 
import { Link } from 'react-router-dom';
import { RegistrationForm } from '../components/RegistrationForm';
import { CodeDisplay } from '../components/CodeDisplay';
import { ArrowLeft } from 'lucide-react';

const formikExample = `import { Formik, Form } from 'formik';
import * as Yup from 'yup';

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

// Usage with Formik
<Formik
  initialValues={initialValues}
  validationSchema={validationSchema}
  onSubmit={async (values, { resetForm }) => {
    // Handle form submission
    await submitForm(values);
    resetForm();
  }}
>
  {({ errors, touched }) => (
    <Form>
      {/* Your form fields here */}
    </Form>
  )}
</Formik>`;

export const FormikExample = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Formik + Yup Validation
          </h1>
          <p className="text-xl text-gray-600">
            Example of form validation using Formik with Yup schema
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <RegistrationForm />
          </div>
          <div className="space-y-8">
            <CodeDisplay 
              title="Validation Code Example" 
              code={formikExample} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 