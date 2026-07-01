import logo from '../assets/logo.png';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  const features = [
    "Sorbetes artesanales",
    "Ingredientes frescos",
    "Sabores únicos",
    "Excelente atención",
    "Ambientes cómodos",
    "Calidad garantizada"
  ];

  return (
    <section id="nosotros" className="py-24 bg-vanilla/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={logo} alt="El Sin Rival Logo" className="w-full h-auto object-contain drop-shadow-lg p-8" />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tradición, sabor y calidad en cada sorbete
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              El Sin Rival es una marca salvadoreña reconocida por ofrecer sorbetes artesanales preparados con ingredientes frescos y sabores auténticos. Nuestra misión es crear experiencias memorables para cada cliente, ofreciendo una amplia variedad de sabores clásicos e innovadores en un ambiente agradable y familiar.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <FaCheckCircle className="text-pistachio text-xl flex-shrink-0" />
                  <span className="text-gray-800 font-medium text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
