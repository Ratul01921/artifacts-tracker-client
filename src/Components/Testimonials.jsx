import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sophia Rai',
    quote: 'This platform helped me discover artifacts I never knew existed. Truly fascinating!',
    avatar: 'https://i.ibb.co.com/N77LNk9/trainer6.png',
  },
  {
    id: 2,
    name: 'Arman Das',
    quote: 'Very informative and well-designed. A must-visit for history lovers!',
    avatar: 'https://i.ibb.co.com/WGdL2kb/trainer5.png',
  },
  {
    id: 3,
    name: 'Lina Chowdhury',
    quote: 'Contributing my family’s artifacts was easy and rewarding. Thank you!',
    avatar: 'https://i.ibb.co.com/3rPnK9T/trainer2.png',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-200 w-11/12 mx-auto my-6">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">What People Are Saying</h2>
        <p className="text-gray-500 mb-10">
          Hear from those who’ve explored or contributed to the artifact collection.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map(({ id, name, quote, avatar }) => (
            <div
              key={id}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800">{name}</h4>
                  <span className="text-sm text-gray-500">Contributor</span>
                </div>
              </div>
              <p className="text-gray-700 italic">“{quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
