import React, { useState } from 'react';
import SimpleInput from './SimpleInput';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmittedEmail(email);

    console.log(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <SimpleInput
        label="Email Address"
        type="email"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Submit</button>
      {submittedEmail && <p>Submitted Email: {submittedEmail}</p>}
    </form>
  );
};

export default ContactForm;