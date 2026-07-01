import gal1 from '../assets/images/galeria1.jpg';
import gal2 from '../assets/images/galeria2.jpg';
import gal3 from '../assets/images/galeria3.jpg';
import gal5 from '../assets/images/galeria5.jpg';

const Gallery = () => {
  const images = [gal1, gal2, gal3, gal5];

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nuestra Galería</h2>
          <p className="text-lg text-gray-600">Un vistazo a la preparación artesanal y momentos felices.</p>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden hover:opacity-90 transition-opacity cursor-pointer shadow-sm hover:shadow-md">
              <img 
                src={img} 
                alt={`Galería ${i + 1}`} 
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
