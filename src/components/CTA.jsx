const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-strawberry">
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Descubre por qué El Sin Rival es el sorbete favorito de miles de salvadoreños
        </h2>
        <p className="text-xl text-white/90 mb-10 leading-relaxed">
          Visita la sucursal más cercana y disfruta sabores únicos elaborados artesanalmente para compartir momentos inolvidables con quienes más quieres.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="#sucursales" className="bg-white text-strawberry hover:bg-cream px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-transform transform hover:-translate-y-1 flex items-center">
            🍨 Encuentra tu sucursal
          </a>
          <a href="https://www.pedidosyasv.com.sv/restaurantes?address=San%20Salvador&areaId=40843&lat=13.69&lng=-89.19&query=el%20sin%20rival" target="_blank" rel="noopener noreferrer" className="bg-pistachio text-white hover:bg-green-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-transform transform hover:-translate-y-1 flex items-center">
            🛵 Ordena ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
