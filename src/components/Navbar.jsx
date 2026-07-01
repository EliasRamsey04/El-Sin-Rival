import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Sabores', href: '#sabores' },
    { name: 'Opiniones', href: '#opiniones' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Sucursales', href: '#sucursales' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#inicio">
              <img src={logo} alt="El Sin Rival Logo" className="h-12 w-auto object-contain" />
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-800 hover:text-strawberry font-medium transition-colors">
                {item.name}
              </a>
            ))}
            <a href="https://www.pedidosyasv.com.sv/restaurantes?address=San%20Salvador&areaId=40843&lat=13.69&lng=-89.19&query=el%20sin%20rival" target="_blank" rel="noopener noreferrer" className="bg-strawberry hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
              Ordenar ahora
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 hover:text-strawberry focus:outline-none">
              {isOpen ? <FiX className="h-8 w-8" /> : <FiMenu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {menuItems.map((item) => (
              <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:bg-pink-50 hover:text-strawberry">
                {item.name}
              </a>
            ))}
            <a href="https://www.pedidosyasv.com.sv/restaurantes?address=San%20Salvador&areaId=40843&lat=13.69&lng=-89.19&query=el%20sin%20rival" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="block w-full text-center mt-4 bg-strawberry hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold">
              Ordenar ahora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
