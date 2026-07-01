import heroBg from '../assets/images/hero.png';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-cream">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Helados El Sin Rival" className="w-full h-full object-cover object-center opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 md:pr-10 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              Los sorbetes artesanales favoritos de <span className="text-strawberry">El Salvador</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
              Disfruta sabores únicos preparados con ingredientes de calidad, frutas naturales y recetas tradicionales que han conquistado a miles de salvadoreños. En El Sin Rival cada sorbete está hecho para crear momentos inolvidables.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a href="#sabores" className="w-full sm:w-auto bg-strawberry hover:bg-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center">
                <span className="mr-2">🍦</span> Ver sabores
              </a>
              <a href="#sucursales" className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-bold text-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center">
                <span className="mr-2">📍</span> Encuentra tu sucursal
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
