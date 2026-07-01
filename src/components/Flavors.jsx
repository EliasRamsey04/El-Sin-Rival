const Flavors = () => {
  const tradicionales = [
    { name: "Leche" },
    { name: "Tres Leches" },
    { name: "Ron con Pasas" },
    { name: "Guineo con Leche" },
    { name: "Fresa con Crema" },
    { name: "Café con Leche" },
    { name: "Chocolate" },
    { name: "Ensalada" },
    { name: "Tamarindo" },
    { name: "Fresa" },
    { name: "Mora" },
    { name: "Coco" }
  ];

  const temporada = [
    { name: "Nance" },
    { name: "Jocote" },
    { name: "Maracuyá" },
    { name: "Marañón" },
    { name: "Mango" },
    { name: "Naranja Mamey" },
    { name: "Arrayán" },
    { name: "Zapote con Leche" },
    { name: "Limón" },
    { name: "Mandarina" }
  ];

  return (
    <section id="sabores" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nuestros Sabores</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Descubre nuestra variedad de sabores, desde los clásicos hasta los más innovadores, todos preparados con la receta tradicional El Sin Rival.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tradicionales */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl font-bold text-strawberry mb-8 text-center border-b-2 border-red-100 pb-4">
              Tradicionales
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {tradicionales.map((flavor, index) => (
                <div key={index} className="bg-red-50 p-4 rounded-xl border border-red-100 hover:shadow-md transition-shadow text-center">
                  <h4 className="text-lg font-bold text-gray-900">{flavor.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Temporada */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl font-bold text-pistachio mb-8 text-center border-b-2 border-green-100 pb-4">
              De Temporada
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {temporada.map((flavor, index) => (
                <div key={index} className="bg-green-50 p-4 rounded-xl border border-green-100 hover:shadow-md transition-shadow text-center">
                  <h4 className="text-lg font-bold text-gray-900">{flavor.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flavors;
