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
