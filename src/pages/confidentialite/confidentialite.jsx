import React from 'react';

const PolitiqueConfidentialite = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-4 text-green-600">Politique de confidentialité</h1>

      <p className="mb-4">
        Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons les informations que vous nous fournissez lorsque vous utilisez notre site web.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Informations collectées</h2>
      <p className="mb-4">
        Nous collectons uniquement les données personnelles que vous nous fournissez volontairement lors de l’inscription ou lors de l’utilisation de certaines fonctionnalités, comme le panier ou la prise de contact.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Utilisation des données</h2>
      <p className="mb-4">
        Les données collectées sont utilisées pour améliorer nos services, personnaliser votre expérience utilisateur et, si vous y avez consenti, vous envoyer des informations par e-mail.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Sécurité</h2>
      <p className="mb-4">
        Nous mettons en œuvre des mesures de sécurité pour protéger vos données personnelles contre tout accès non autorisé.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies</h2>
      <p className="mb-4">
        Notre site peut utiliser des cookies pour améliorer l’expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser les cookies si vous le souhaitez.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Vos droits</h2>
      <p className="mb-4">
        Vous pouvez à tout moment demander l’accès, la rectification ou la suppression de vos données personnelles en nous contactant à l’adresse suivante : <a href="mailto:support@exemple.com" className="text-green-600 underline">support@exemple.com</a>.
      </p>

      <p className="mt-8 text-sm text-gray-500">Dernière mise à jour : avril 2025</p>
    </div>
  );
};

export default PolitiqueConfidentialite;
