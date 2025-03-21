export default function ServiceSelector({ services, onSelect }) {
  return (
    <div className="flex gap-4 justify-center mb-6">
      {services.map((service) => (
        <button
          key={service.id}
          onClick={() => onSelect(service)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition"
        >
          {service.name}
        </button>
      ))}
    </div>
  );
}
