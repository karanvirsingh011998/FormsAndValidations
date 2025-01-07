 
import { Field, ErrorMessage } from 'formik';

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
}) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <Field
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
      />
      <ErrorMessage
        name={name}
        component="p"
        className="mt-1 text-sm text-red-600"
      />
    </div>
  );
};