import Image from "next/image";

export default function ServicePreview({ service }) {
  if (!service) {
    return <p className="text-gray-500 text-center">Please select a service to see details.</p>;
  }

  return (
    <div className="text-center mt-6">
      <h3 className="text-xl font-bold text-blue-700">{service.name}</h3>
      <p className="mt-2 text-gray-700">{service.description}</p>

      {/* Optional image */}
      <div className="mt-4">
        <Image
          src={service.image}
          alt={service.name}
          width={400}
          height={250}
          className="mx-auto rounded"
        />
      </div>
    </div>
  );
}
