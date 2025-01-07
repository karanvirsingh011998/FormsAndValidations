import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FormikExample } from './pages/FormikExample';
import { RHFZodExample } from './pages/RHFZodExample';
import { RHFYupExample } from './pages/RHFYupExample';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/formik-example" element={<FormikExample />} />
        <Route path="/rhf-zod-example" element={<RHFZodExample />} />
        <Route path="/rhf-yup-example" element={<RHFYupExample />} />
      </Routes>
    </Router>
  );
}

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Form Validation Examples
          </h1>
          <p className="text-xl text-gray-600">
            Explore different form validation libraries and techniques
          </p>
        </div>

        <div className="mb-12 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            About the Libraries
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Formik</h3>
              <p className="text-gray-600">
                Formik is a popular form library that helps with form state management, validation, and submission. 
                When paired with Yup, it provides a powerful and intuitive way to handle form validations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">React Hook Form</h3>
              <p className="text-gray-600">
                React Hook Form is a performant, flexible and extensible form library with easy-to-use validation. 
                It reduces the amount of code you need to write while removing unnecessary re-renders.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Validation Libraries</h3>
              <div className="ml-4 space-y-2 mt-2">
                <p className="text-gray-600">
                  <span className="font-medium">Yup:</span> A schema builder for runtime value parsing and validation. 
                  Integrates well with both Formik and React Hook Form.
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Zod:</span> TypeScript-first schema validation with static type inference. 
                  Provides excellent type safety and runtime validation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link 
            to="/formik-example"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Formik + Yup
            </h2>
            <p className="text-gray-600 mb-4">
              Form validation using Formik with Yup schema
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Built-in form state management</li>
              <li>• Easy form validation</li>
              <li>• Intuitive error handling</li>
            </ul>
          </Link>

          <Link 
            to="/rhf-zod-example"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              React Hook Form + Zod
            </h2>
            <p className="text-gray-600 mb-4">
              Form validation using React Hook Form with Zod schema
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• TypeScript-first validation</li>
              <li>• Excellent type inference</li>
              <li>• High performance</li>
            </ul>
          </Link>

          <Link 
            to="/rhf-yup-example"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              React Hook Form + Yup
            </h2>
            <p className="text-gray-600 mb-4">
              Form validation using React Hook Form with Yup schema
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Minimal re-renders</li>
              <li>• Flexible validation</li>
              <li>• Easy integration</li>
            </ul>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;