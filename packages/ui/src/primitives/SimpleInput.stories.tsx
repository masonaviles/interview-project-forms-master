import React from 'react';
import type { Story } from '@ladle/react';
import ContactForm from './ContactForm';

export const DefaultVariant: Story = () => {
  return (
    <div>
      <h2>Contact Form Demo</h2>
      <ContactForm />
    </div>
  );
};

// import React, { ChangeEvent } from 'react';

// interface SimpleInputProps {
//   label?: string;
//   type?: string;
//   value: string;
//   onChange: (event: ChangeEvent<HTMLInputElement>) => void;
//   validation?: (value: string) => string | undefined;
//   inputComponent?: React.ReactNode;
//   className?: string;
//   inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
// }

// const SimpleInput: React.FC<SimpleInputProps> = ({
//   label,
//   type = 'text',
//   value,
//   onChange,
//   validation,
//   inputComponent: InputComponent = 'input',
//   className,
//   inputProps,
// }) => {
//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     if (onChange) {
//       onChange(e);
//     }
//     if (validation) {
//       validation(e.target.value);
//     }
//   };

//   return (
//     <div className={className}>
//       {label && <label>{label}</label>}
//       {React.cloneElement(InputComponent as React.ReactElement<any>, {
//         type,
//         value,
//         onChange: handleChange,
//         ...inputProps,
//       })}
//     </div>
//   );
// };

// export default SimpleInput;


// import React from 'react';
// import { Story, Meta } from '@storybook/react';

// import SimpleInput, { SimpleInputProps } from './SimpleInput';

// export default {
//   title: 'Components/SimpleInput',
//   component: SimpleInput,
//   argTypes: {
//     onChange: { action: 'changed' },
//   },
// } as Meta;

// const Template: Story<SimpleInputProps> = (args) => <SimpleInput {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   label: 'Email Address',
//   type: 'text',
//   value: '',
//   onChange: () => {},
//   placeholder: 'Enter your email',
// };

// export const CustomInput = Template.bind({});
// CustomInput.args = {
//   label: 'Custom Input Label',
//   type: 'text',
//   value: '',
//   onChange: () => {},
//   inputComponent: <input className="custom-input" />,
//   placeholder: 'Enter text',
// };

// export const WithValidation = Template.bind({});
// WithValidation.args = {
//   label: 'Required Field',
//   type: 'text',
//   value: '',
//   onChange: () => {},
//   validation: (value: string) => (value.trim() ? undefined : 'This field is required'),
//   placeholder: 'Enter text',
// };

// export const WithClassName = Template.bind({});
// WithClassName.args = {
//   label: 'With Class Name',
//   type: 'text',
//   value: '',
//   onChange: () => {},
//   className: 'custom-class',
//   placeholder: 'Enter text',
// };
