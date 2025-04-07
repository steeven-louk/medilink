import React from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      name: "💊 Thomas, 52 ans, pharmacien en officine",
      text: "J’ai découvert MediLink grâce à un patient atteint de diabète et sous traitement multi-quotidien. Depuis, je le recommande régulièrement à mes clients polymédiqués. La différenciation par couleurs aide à éviter les erreurs, et le système de LED rend la prise intuitive même pour les personnes âgées. Le QR code qui donne accès à l’app permet aussi de centraliser les ordonnances et rappels. C’est une vraie avancée en observance thérapeutique."
    },
    {
      name: "👩‍🎓 Léa, 24 ans, étudiante en master avec TDAH",
      text: "Je prends plusieurs compléments et un traitement quotidien, et avec mon TDAH, c’est compliqué d’être régulière. MediLink m’a sauvée. Le design est joli, pas trop médicalisé, donc ça passe bien sur mon bureau. J’adore les couleurs qui m’aident à savoir quoi prendre sans réfléchir, et la lumière du jour m’évite de zapper mes prises. L’appli est top aussi, j’ai mis des rappels avec des notifications douces. Vraiment, ça change la vie."
    },
    {
      name: "👩‍⚕️ Claire, 32 ans, infirmière en gériatrie",
      text: "Je recommande MediLink à plusieurs de mes patients âgés sous traitement complexe. Les compartiments colorés sont très utiles pour identifier rapidement les types de médicaments, et la lumière qui s’allume pour le jour en cours évite beaucoup d’oublis. Le QR code permet aux familles d’accéder facilement à l’application et de suivre la prise à distance. Franchement, c’est un outil rassurant, autant pour les soignants que pour les familles."
    },
    {
      name: "👨‍💻 Marc, 40 ans, cadre stressé avec traitement chronique",
      text: "Avant MediLink, j’oubliais souvent mes prises, surtout en déplacement. Maintenant, tout est bien organisé par couleur et l’alerte lumineuse est discrète mais efficace. J’apprécie beaucoup le côté minimaliste et le fait que la batterie tienne 2 jours, c’est parfait pour les week-ends sans chargeur. En plus, l’appli me notifie si j’ai zappé une prise. Simple et super pratique."
    },
    {
      name: "👵 Aïcha, 67 ans, retraitée – cadeau de sa fille",
      text: "Ma fille m’a acheté MediLink quand j’ai commencé un traitement pour le cœur. Au début j’étais un peu perdue, mais avec les couleurs et la lumière qui montre le jour, c’est devenu très facile. Je n’ai plus peur d’oublier. Et ma fille peut vérifier sur son téléphone si j’ai bien pris mes médicaments, ça la rassure beaucoup. C’est vraiment un beau produit."
    }
  ];

  return (
    <div className="my-8 px-4">
      <h1 className="text-2xl md:text-3xl font-bold text-center capitalize mb-8">Témoignages</h1>
      
      <section className="container  mx-auto flex flex-wrap justify-center gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="w-full shadow-md shadow-gray-300 max-w-md bg-white p-6 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-lg font-semibold capitalize text-gray-800">{item.name}</h2>
            <hr className="my-3 w-16 border-green-500" />
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Testimonial;
