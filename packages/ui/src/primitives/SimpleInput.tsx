import React, { ChangeEvent } from 'react';

interface SimpleInputProps {
  label?: string;
  type?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
}

const SimpleInput: React.FC<SimpleInputProps> = ({
  label,
  type = 'text',
  onChange,
  value,
  placeholder,
}) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input type={type} onChange={onChange} value={value} placeholder={placeholder} />
    </div>
  );
};

export default SimpleInput;