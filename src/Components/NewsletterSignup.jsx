import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    // You can integrate with a backend or service like Mailchimp here
    console.log('Subscribed with:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-16 bg-gray-200 w-11/12 mx-auto my-6">
      <div className="max-w-screen-md mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
          Stay Updated with Our Artifacts
        </h2>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter — no spam, only cool artifacts!
        </p>

        {submitted ? (
          <p className="text-green-600 font-medium">Thanks for subscribing!</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 w-full sm:w-auto flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterSignup;
