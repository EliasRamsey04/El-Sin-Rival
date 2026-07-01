import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';

// Fix Leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const branches = [
  { name: "El Sin Rival • Los Próceres", city: "San Salvador", rating: 4.8, reviews: 35, lat: 13.6823, lng: -89.2182, desc: "Excelente calidad 👌 recomendado 10/10" },
  { name: "El Sin Rival • Reforma San Benito", city: "San Salvador", rating: 4.4, reviews: 27, lat: 13.6929, lng: -89.2405, desc: "Delicioso, la chica es muy amable." },
  { name: "El Sin Rival • Centro Comercial Santa Elena", city: "Santa Elena", rating: 4.7, reviews: 3, lat: 13.6705, lng: -89.2555, desc: "Buenísimo excelente atención" },
  { name: "El Sin Rival • Tuscania", city: "Zaragoza", rating: 3.2, reviews: 6, lat: 13.5937, lng: -89.2789, desc: "Entrega a domicilio" },
  { name: "El Sin Rival • La Skina", city: "Santa Tecla", rating: 4.5, reviews: 8, lat: 13.6769, lng: -89.2885, desc: "Uno de los mejores helados en el país" },
  { name: "El Sin Rival | Antiguo Cuscatlán", city: "Antiguo Cuscatlán", rating: 4.3, reviews: 4, lat: 13.6738, lng: -89.2520, desc: "Buenos servicio amigable" },
  { name: "Sin Rival Paseo", city: "San Salvador", rating: 5.0, reviews: 1, lat: 13.7050, lng: -89.2450, desc: "Excelente" },
  { name: "El Sin Rival • Plaza Masferrer", city: "San Salvador", rating: 4.3, reviews: 18, lat: 13.7121, lng: -89.2415, desc: "Entrega a domicilio" },
  { name: "El Sin Rival • Condominio Central", city: "Santa Ana", rating: 4.5, reviews: 135, lat: 13.9942, lng: -89.5597, desc: "Sorbete artesanales de frutas, muy deliciosos" },
  { name: "El Sin Rival • Cafetalón", city: "Santa Tecla", rating: 4.9, reviews: 13, lat: 13.6780, lng: -89.2800, desc: "Los mejores del centro del universo!!" },
  { name: "El Sin Rival • Santa Elena", city: "Santa Elena", rating: 3.5, reviews: 4, lat: 13.6680, lng: -89.2580, desc: "Texaco Santa Elena" },
  { name: "El Sin Rival • Nuevo Lourdes", city: "Colón", rating: 5.0, reviews: 11, lat: 13.7330, lng: -89.3780, desc: "Sorbetes deliciosos y atención muy buena" },
  { name: "El Sin Rival • Masferrer", city: "San Salvador", rating: 4.8, reviews: 8, lat: 13.7150, lng: -89.2400, desc: "Entrega a domicilio" },
  { name: "El Sin Rival • Ave. Bernal", city: "San Salvador", rating: 4.1, reviews: 12, lat: 13.7165, lng: -89.2245, desc: "Buen atención y variedad de sabores" },
  { name: "El Sin Rival Montserrat", city: "San Salvador", rating: 5.0, reviews: 2, lat: 13.6760, lng: -89.2100, desc: "Helado artesanal" },
  { name: "El Sin Rival • IVU", city: "Santa Ana", rating: 4.5, reviews: 182, lat: 13.9850, lng: -89.5650, desc: "Sorbete tres leches es la especialidad" },
  { name: "El Sin Rival", city: "Soyapango", rating: 0, reviews: 0, lat: 13.7150, lng: -89.1390, desc: "Nueva sucursal" },
  { name: "El Sin Rival • San Miguel", city: "San Miguel", rating: 4.8, reviews: 42, lat: 13.4833, lng: -88.1833, desc: "Deliciosos sorbetes, los mejores artesanales." },
  { name: "El Sin Rival La 31", city: "San Salvador", rating: 4.5, reviews: 10, lat: 13.7000, lng: -89.2000, desc: "Excelente ubicación", url: "https://www.google.com/maps/search/?api=1&query=el+sin+rival+la+31" },
];

const Branches = () => {
  return (
    <section id="sucursales" className="py-24 bg-vanilla/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Encuentra tu sucursal</h2>
          <p className="text-lg text-gray-600">Más de 15 ubicaciones en todo El Salvador esperándote.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* List */}
          <div className="w-full lg:w-1/3 h-[600px] overflow-y-auto pr-4 space-y-4 custom-scrollbar">
            {branches.map((branch, index) => (
              <div key={index} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 text-lg mb-1">{branch.name}</h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500 flex items-center">
                    <FaMapMarkerAlt className="mr-1 text-strawberry" /> {branch.city}
                  </span>
                  {branch.rating > 0 && (
                    <span className="text-sm font-semibold flex items-center text-gray-700">
                      {branch.rating} <FaStar className="text-yellow-400 ml-1" />
                      <span className="text-gray-400 font-normal ml-1">({branch.reviews})</span>
                    </span>
                  )}
                </div>
                {branch.desc && <p className="text-sm text-gray-600 mb-4 italic">"{branch.desc}"</p>}
                
                <a 
                  href={branch.url || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.name + ' ' + branch.city)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-block bg-cream text-chocolate px-4 py-2 rounded-full text-sm font-semibold hover:bg-vanilla transition-colors"
                >
                  📍 Cómo llegar
                </a>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="w-full lg:w-2/3 h-[600px] rounded-3xl overflow-hidden shadow-lg border-4 border-white">
            <MapContainer center={[13.6929, -89.2405]} zoom={9} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {branches.map((branch, index) => (
                <Marker key={index} position={[branch.lat, branch.lng]}>
                  <Popup>
                    <div className="text-center">
                      <strong className="block mb-1">{branch.name}</strong>
                      <span className="block text-sm text-gray-600 mb-2">{branch.city}</span>
                      <a 
                        href={branch.url || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.name + ' ' + branch.city)}`}
                        target="_blank" rel="noopener noreferrer"
                        className="bg-strawberry text-white px-3 py-1 rounded text-xs no-underline"
                      >
                        Cómo llegar
                      </a>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branches;
