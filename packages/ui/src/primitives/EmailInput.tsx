import React, { ChangeEvent } from 'react';

interface EmailInputProps {
  label?: string;
  type?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
}

const EmailInput: React.FC<EmailInputProps> = ({
  label,
  type = 'text',
  onChange,
  value,
  placeholder,
}) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>}
      <input 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type} 
        onChange={onChange} 
        value={value} 
        placeholder={placeholder} 
      />
    </div>
  );
};

export default EmailInput;