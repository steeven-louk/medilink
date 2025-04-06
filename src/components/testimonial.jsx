import React from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel porro corrupti non excepturi adipisci reiciendis, recusandae nemo sapiente eligendi ratione iure quia veritatis dolore maxime."
    },
    {
      name: "Jane Smith",
      text: "Exercitationem quas perspiciatis officiis. Atque assumenda modi, repudiandae error, temporibus cumque necessitatibus dolore non voluptate, nobis hic sed ratione!"
    },
    {
      name: "Robert Johnson",
      text: "Magnam nesciunt molestiae excepturi, consequatur blanditiis quia alias perferendis inventore, reprehenderit ea distinctio voluptates, illum saepe corporis suscipit?"
    }
  ];

  return (
    <div className="my-8 px-4">
      <h1 className="text-2xl md:text-3xl font-bold text-center capitalize mb-8">Témoignages</h1>
      
      <section className="container mx-auto flex flex-wrap justify-center gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-md bg-white p-6 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
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
