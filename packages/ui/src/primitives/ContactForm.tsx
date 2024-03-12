import React, { useState, ChangeEvent } from 'react';
import EmailInput from './EmailInput';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setIsSubmitting(true);

    // Temporarily skip the POST request to demonstrate form functionality without server interaction
    /*
    try {
      const response = await fetch('/api/submit-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setSubmittedEmail(email);
        setEmail('');
      } else {
        setError('Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
    */

    // Directly show the submitted email for demonstration purposes
    setSubmittedEmail(email);
    setEmail('');
    setIsSubmitting(false);

  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto my-8 p-4 bg-gray-100 rounded-lg shadow-lg">
      <EmailInput
        label="Email Address"
        type="email"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`mt-4 w-full px-4 py-2 rounded-md font-semibold text-white ${
          isSubmitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
      {submittedEmail && <p className="mt-4">Submitted Email: {submittedEmail}</p>}
    </form>
  );
};

export default ContactForm;