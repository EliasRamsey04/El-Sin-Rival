const MissionVision = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-pink-50 p-10 rounded-3xl shadow-sm border border-pink-100 hover:shadow-md transition-shadow">
            <h3 className="text-3xl font-bold text-strawberry mb-4 flex items-center">
              <span className="text-4xl mr-3">🎯</span> Misión
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Crear momentos felices ofreciendo sorbetes artesanales elaborados con ingredientes de alta calidad, innovación constante y un excelente servicio al cliente.
            </p>
          </div>
          
          <div className="bg-green-50 p-10 rounded-3xl shadow-sm border border-green-100 hover:shadow-md transition-shadow">
            <h3 className="text-3xl font-bold text-pistachio mb-4 flex items-center">
              <span className="text-4xl mr-3">👁️</span> Visión
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Ser la cadena de heladerías artesanales líder en El Salvador, reconocida por su calidad, innovación y por brindar experiencias inolvidables a cada visitante.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
