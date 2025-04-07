import React from 'react'
import Heros from '../../components/heros'
import Testimonial from '../../components/testimonial'

const Acceuil = () => {
    const icons =[
    {
      ico:"./assets/patient-70ans-1.svg",
      name:"fiabilité"
    },
    {
      ico:"./assets/aidant-home-3.svg",
      name:"sécurité"
    },
    {
      ico:"./assets/medecin-bilan-2.svg",
      name:"service"
    },
    {
      ico:"./assets/Group-119.png.webp",
      name:"Alerte"
    },
  ]
  return (
    <>
        <Heros/>
        <section className="container mx-auto flex flex-wrap justify-center items-center gap-6 my-5 px-4">
  {icons.map((item, index) => (
    <div
      key={index}
      className="w-[8rem] p-4 rounded-md shadow-md shadow-gray-300 hover:shadow-gray-400 hover:scale-105 transition-transform duration-200 bg-white flex flex-col items-center text-center"
    >
      <img
        src={item.ico}
        alt={item.name}
        className="w-16 h-16 object-contain"
      />
      <span className="mt-4 capitalize font-bold text-gray-700">
        {item.name}
      </span>
    </div>
  ))}
</section>
<section className='bg-[#032749] my-5'>
  <div className='flex flex-wrap container mx-auto '>
  <div className=' flex-1 p-4 my-auto'>
    <h2 className='text-2xl md:text-4xl'>Medilink favorise le bon usage du médicament pour vieillir en bonne santé.</h2>
    <a href="/notrePilulier"><button className='uppercase mt-4'>en savoir plus</button></a>
  </div>
  <div className='md:flex-1'>
    <img src="/assets/groupe-medissimo.png" className='w-full objecr-cover' alt="groupe medissimo" />
  </div>
  </div>
</section>

      <Testimonial/>
    </>
  )
}

export default Acceuil