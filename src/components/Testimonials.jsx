import { useState } from 'react';
import { FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);

  const reviews = [
    { text: "Me encanta! Súper innovador el sabor de tres leches y fresas con crema😍", author: "Jose Alberto Reyes Guevara" },
    { text: "Me gusto mucho el sabor de Zapote y Tamarindo, que delicia de sorbete, el lugar comodo con aire acondicionado", author: "Josue Evora" },
    { text: "Los sorbetes más ricos, gran variedad, bonitas instalaciones y excelente servicio! Definitivamente regresaremos!", author: "Darío Ríos Montoya" },
    { text: "Muy acogedor en verdad, un lugar super agradable, con toda la comodidad y buen ambiente... buenísimos y variados sabores del sorbete de carreton que a todos nos gusta.", author: "MIKE LEANO" },
    { text: "Buenas tardes conocí el local por recomendación y me impresionó lo bien que saben los sorbetes tienen precios accesibles, buena cantidad y excelente atención al cliente...", author: "Juan Carlos Masariego" },
    { text: "Me encantó excelente ubicación y servicio", author: "Laura Cerna" },
    { text: "Excelente calidad 👌 recomendado 10/10 muy rico el de mango verde 😋", author: "Beatriz Alvarado" },
    { text: "Súper buenos, tienen variedad de sabores, no solo los típicos, tienen sorbetes con splenda.", author: "Ana Perla" },
    { text: "Deliciosos! La chica que atiende super amable, y el lugar super bonito. Hay parqueo a un costado.", author: "Guillermo Alvarado" },
    { text: "Buena variedad de sabores y excelentes precios. Recomendado sin duda.", author: "Abraham Cruz" },
    { text: "El lugar impecable y super accesible cerca del Call center y la UCA. Atencion y calidad excelentes", author: "Fabiola Sanchez" },
    { text: "Súper limpio, excelente ambiente, con gusto regresaría", author: "Emperatriz Barrera" },
    { text: "Buenos sorbetes artesanales. Muy recomendado", author: "Daniela Portillo" },
    { text: "Los mejores sorbete de la zona. El mejor es el de fresa con crema❤️", author: "Bal Castaneda" },
    { text: "Miy rico todo, el lugar esta muy bonito.", author: "Daniel Oswaldo Martinez Barahona" },
    { text: "De muy buena calidad, los mejores.", author: "Rocio Calderon" },
    { text: "Exelente sabor super recomendadisimos", author: "Jared Portillo" },
    { text: "Muy buen lugar, recomendadisimo y buenos precios", author: "Cliente Feliz" }
  ];

  const displayedReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <section id="opiniones" className="py-24 bg-vanilla">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-2xl" />
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">4.8 Excelente Calificación</h2>
          <p className="text-lg text-gray-600">Lo que dicen nuestros clientes felices en Google Reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex flex-col justify-between">
              <p className="text-gray-700 italic mb-6">"{review.text}"</p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-strawberry text-white flex items-center justify-center font-bold">
                  {review.author.charAt(0)}
                </div>
                <span className="font-semibold text-gray-900">{review.author}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center space-x-2 bg-white text-strawberry border-2 border-strawberry hover:bg-strawberry hover:text-white px-8 py-3 rounded-full font-bold transition-colors"
          >
            <span>{showAll ? 'Ver menos opiniones' : 'Ver más opiniones'}</span>
            {showAll ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
