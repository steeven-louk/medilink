// src/pages/conditions/conditions.jsx
import React from 'react';

const ConditionsUtilisation = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-green-600 mb-4">Conditions d'utilisation</h1>
      <p className="mb-4">
        Bienvenue sur notre site. En accédant à ce site, vous acceptez les présentes conditions
        d'utilisation. Si vous êtes en désaccord avec une partie quelconque des conditions, veuillez
        ne pas utiliser notre site.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Utilisation du site</h2>
      <p className="mb-4">
        Le contenu du site est à titre informatif. Nous nous réservons le droit de modifier les
        informations à tout moment.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Propriété intellectuelle</h2>
      <p className="mb-4">
        Tous les contenus présents (textes, images, logos) sont notre propriété ou celle de nos
        partenaires. Toute reproduction est interdite sans autorisation.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Limitation de responsabilité</h2>
      <p>
        Nous ne sommes pas responsables en cas de dommage direct ou indirect lié à l'utilisation du
        site.
      </p>
    </section>
  );
};

export default ConditionsUtilisation;
