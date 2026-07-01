import { FaLeaf, FaIceCream, FaSmile, FaUsers, FaStore, FaMedal, FaStar, FaLightbulb } from 'react-icons/fa';

const WhyUs = () => {
  const reasons = [
    { icon: <FaLeaf />, title: "Ingredientes frescos" },
    { icon: <FaIceCream />, title: "Recetas artesanales" },
    { icon: <FaStar />, title: "Gran variedad de sabores" },
    { icon: <FaSmile />, title: "Excelente atención" },
    { icon: <FaUsers />, title: "Ambientes familiares" },
    { icon: <FaStore />, title: "Múltiples sucursales" },
    { icon: <FaMedal />, title: "Calidad garantizada" },
    { icon: <FaLightbulb />, title: "Innovación constante" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">¿Por qué elegirnos?</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-pink-50/50 rounded-3xl hover:bg-pink-100 transition-colors">
              <div className="text-4xl text-strawberry mb-4 bg-white p-4 rounded-full shadow-sm">
                {reason.icon}
              </div>
              <h3 className="font-semibold text-gray-900">{reason.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
