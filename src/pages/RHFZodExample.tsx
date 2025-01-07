 
import { Link } from 'react-router-dom';
import { CodeDisplay } from '../components/CodeDisplay';
import { ArrowLeft } from 'lucide-react';
import { RHFZodForm } from '../components/RHFZodForm';

const rhfZodExample = `import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const validationSchema = z.object({
  firstName: z.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
  lastName: z.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
  email: z.string()
    .email('Invalid email'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
  dateOfBirth: z.string(),
  gender: z.enum(['male', 'female', 'other']),
  occupation: z.string(),
  phoneNumber: z.string()
    .regex(/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number'),
  terms: z.boolean()
    .refine((val) => val === true, 'You must accept the terms')
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

// Usage with React Hook Form
const {
  register,
  handleSubmit,
  formState: { errors }
} = useForm({
  resolver: zodResolver(validationSchema)
});

const onSubmit = (data) => {
  console.log(data);
};`;

export const RHFZodExample = () => {
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
            React Hook Form + Zod
          </h1>
          <p className="text-xl text-gray-600">
            Example of form validation using React Hook Form with Zod schema
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <RHFZodForm />
          </div>
          <div className="space-y-8">
            <CodeDisplay 
              title="Validation Code Example" 
              code={rhfZodExample} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 