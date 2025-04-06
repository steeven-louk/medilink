import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tu peux ici envoyer les données avec fetch ou axios vers un backend
    console.log("Formulaire soumis:", form);
    setSubmitted(true);
  };

  return (
    <>
 <section className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-3xl font-bold text-center mb-8 capitalize">contactez-nous</h1>

      {submitted ? (
        <div className="text-green-600 text-center font-semibold">
          Merci pour votre message ! Nous vous répondrons très vite.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 shadow-md p-6 rounded-md "
        >
          <label className="flex flex-col">
            <span className="font-semibold mb-1">Nom</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md px-4 py-2"
              placeholder="Votre nom"
            />
          </label>

          <label className="flex flex-col">
            <span className="font-semibold mb-1">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md px-4 py-2"
              placeholder="votre@email.com"
            />
          </label>

          <label className="flex flex-col">
            <span className="font-semibold mb-1">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="border border-gray-300 rounded-md px-4 py-2"
              placeholder="Votre message..."
            />
          </label>

          <button
            type="submit"
            className="bg-green-500 text-white font-semibold py-2 px-6 rounded hover:bg-green-600 transition"
          >
            Envoyer
          </button>
        </form>
      )}
    </section>    </>
  );
};

export default Contact;
