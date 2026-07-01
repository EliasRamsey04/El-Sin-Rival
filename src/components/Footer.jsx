import logo from '../assets/logo.png';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          <div>
            <img src={logo} alt="El Sin Rival Logo" className="h-16 mb-6 brightness-0 invert opacity-90" />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Tradición, sabor y calidad en cada sorbete desde nuestros inicios. Compartiendo momentos felices con las familias salvadoreñas.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/ElSinRivalOficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-strawberry hover:text-white transition-colors">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com/elsinrivaloficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-strawberry hover:text-white transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Historia de la Marca</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#nosotros" className="hover:text-strawberry transition-colors">Nuestros Inicios</a></li>
              <li><a href="#mision" className="hover:text-strawberry transition-colors">Misión y Visión</a></li>
              <li><a href="#valores" className="hover:text-strawberry transition-colors">Valores</a></li>
              <li><a href="#calidad" className="hover:text-strawberry transition-colors">Garantía de Calidad</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Sucursales</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#sucursales" className="hover:text-strawberry transition-colors">San Salvador</a></li>
              <li><a href="#sucursales" className="hover:text-strawberry transition-colors">Santa Tecla</a></li>
              <li><a href="#sucursales" className="hover:text-strawberry transition-colors">Santa Ana</a></li>
              <li><a href="#sucursales" className="hover:text-strawberry transition-colors">San Miguel</a></li>
              <li><a href="#sucursales" className="hover:text-strawberry transition-colors">Ver todas las ubicaciones</a></li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} El Sin Rival. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
