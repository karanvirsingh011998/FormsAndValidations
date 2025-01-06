import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { userSchema } from './lib/schema';
import { FormInput } from './components/FormInput';
import { CheckCircle2, AlertCircle } from 'lucide-react';

type FormData = z.infer<typeof userSchema>;

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      // age: undefined,
      // terms: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
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

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="First Name"
              name="firstName"
              register={register}
              error={errors.firstName}
              placeholder="John"
            />
            <FormInput
              label="Last Name"
              name="lastName"
              register={register}
              error={errors.lastName}
              placeholder="Doe"
            />
          </div>

          <FormInput
            label="Email"
            name="email"
            type="email"
            register={register}
            error={errors.email}
            placeholder="you@example.com"
          />

          <FormInput
            label="Password"
            name="password"
            type="password"
            register={register}
            error={errors.password}
          />

          <FormInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            register={register}
            error={errors.confirmPassword}
          />

          {/* <FormInput
            label="Age"
            name="age"
            type="number"
            register={register}
            error={errors.age}
          /> */}

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('terms')}
              id="terms"
              className="h-4 w-4 text-blue-600 rounded border-gray-300"
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I accept the terms and conditions
            </label>
          </div>
          {errors.terms && (
            <p className="text-sm text-red-600 mt-1">{errors.terms.message}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        {Object.keys(errors).length > 0 && (
          <div className="mt-4 p-4 bg-red-50 rounded-lg flex items-center gap-2 text-red-700">
            <AlertCircle className="h-5 w-5" />
            <span>Please fix the errors above</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;