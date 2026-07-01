import { FaStar, FaHeart, FaStore, FaIceCream, FaLeaf, FaUsers } from 'react-icons/fa';

const Trust = () => {
  const stats = [
    { icon: <FaStar className="text-yellow-400" />, title: "4.8", desc: "Calificación destacada" },
    { icon: <FaHeart className="text-strawberry" />, title: "Miles", desc: "De clientes felices" },
    { icon: <FaStore className="text-pistachio" />, title: "+15", desc: "Sucursales" },
    { icon: <FaIceCream className="text-pink-400" />, title: "100%", desc: "Sabores artesanales" },
    { icon: <FaLeaf className="text-green-500" />, title: "Frescos", desc: "Ingredientes de calidad" },
    { icon: <FaUsers className="text-blue-500" />, title: "Familiar", desc: "Experiencia única" }
  ];

  return (
    <section className="py-12 bg-white relative z-20 shadow-sm -mt-8 mx-4 md:mx-12 rounded-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center p-4 rounded-2xl hover:bg-cream transition-colors duration-300">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.title}</h3>
              <p className="text-sm text-gray-600 font-medium">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
