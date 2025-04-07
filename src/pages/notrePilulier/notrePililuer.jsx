import React from 'react';


const NotrePilulier = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 capitalize">Notre Pilulier</h1>

      <div className="flex  flex-wrap-reverse gap-8 mt-5">
      <div className="md:w-[45rem] my-auto">
     <h2 className='text-2xl'> 💊 Bienvenue chez MediLink – Le pilulier intelligent qui prend soin de vous</h2>
    <p>MediLink révolutionne la gestion des traitements médicaux grâce à un pilulier connecté, élégant et pratique.
    Doté de compartiments colorés (rouge, bleu, vert, jaune), chacun dédié à un type de médicament, notre pilulier vous accompagne pour un suivi mensuel complet, en toute simplicité.</p>
<ul className='flex flex-col gap-3'>
  <li>✔️ LED intelligentes : les compartiments du jour s’allument pour vous guider</li>
  <li>✔️ Application mobile intuitive : suivez vos prises, recevez des rappels et alertez vos proches en cas d’oubli</li>
  <li>✔️ Connexion via QR code : accès rapide à l’app pour les utilisateurs et aidants</li>
  <li>✔️ Autonomie de 48h : idéal au quotidien comme en déplacement</li>
  <li>✔️ Design moderne et compact : un objet de santé qui s’intègre à votre vie</li>
</ul>

<p>Que vous soyez patient, aidant ou professionnel de santé, MediLink facilite l’observance du traitement, réduit les oublis et renforce la sérénité de toute la famille.</p>
<p>🧠 Prenez soin de votre santé, un compartiment à la fois.</p>
      </div>
      <div className="flex-1">
        <img src="./assets/pilulier.png" alt="" className='object-cover' />
      </div>
      </div>
    </section>
  );
};

export default NotrePilulier;
