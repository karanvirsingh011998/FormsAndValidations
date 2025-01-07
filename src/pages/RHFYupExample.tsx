 
import { Link } from 'react-router-dom';
import { CodeDisplay } from '../components/CodeDisplay';
import { ArrowLeft } from 'lucide-react';
import { RHFYupForm } from '../components/RHFYupForm';

const rhfYupExample = `import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validationSchema = yup.object({
  firstName: yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: yup.string()
    .email('Invalid email')
    .required('Required'),
  password: yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Required'),
  dateOfBirth: yup.date()
    .max(new Date(), 'Date cannot be in the future')
    .required('Required'),
  gender: yup.string()
    .oneOf(['male', 'female', 'other'], 'Please select a valid option')
    .required('Required'),
  occupation: yup.string()
    .required('Required'),
  phoneNumber: yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number')
    .required('Required'),
  terms: yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions')
});

// Usage with React Hook Form
const {
  register,
  handleSubmit,
  formState: { errors }
} = useForm({
  resolver: yupResolver(validationSchema)
});

const onSubmit = (data) => {
  console.log(data);
};`;

export const RHFYupExample = () => {
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
            React Hook Form + Yup
          </h1>
          <p className="text-xl text-gray-600">
            Example of form validation using React Hook Form with Yup schema
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <RHFYupForm />
          </div>
          <div className="space-y-8">
            <CodeDisplay 
              title="Validation Code Example" 
              code={rhfYupExample} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 