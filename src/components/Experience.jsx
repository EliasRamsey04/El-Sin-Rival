import expImg from '../assets/images/experiencia.jpg';

const Experience = () => {
  const experiences = [
    "Familias disfrutando helados",
    "Ambientes climatizados",
    "Conos y Copas especiales",
    "Batidos deliciosos"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Más que un sorbete, una <span className="text-strawberry">experiencia</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Nuestras instalaciones están diseñadas para que pases momentos increíbles. Locales modernos, climatizados y con el mejor ambiente para compartir con niños, familia, pareja o amigos.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-cream rounded-2xl p-4 text-center font-medium text-gray-800 hover:bg-vanilla transition-colors">
                  {exp}
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={expImg} alt="Gente comiendo helado" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
