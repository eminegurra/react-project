"use client";
import Image from "next/image";
import { servicesData } from "../data";

export default function Services() {
  // Event handler to add class
  const handleMouseEnter = (e) => {
    e.currentTarget.classList.add("bg-blue-100");
    e.currentTarget.classList.remove("bg-gray-100");
  };

  // Event handler to remove class
  const handleMouseLeave = (e) => {
    e.currentTarget.classList.remove("bg-blue-100");
    e.currentTarget.classList.add("bg-gray-100");
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 text-center">Our Services</h1>
      <p className="text-gray-600 text-center mt-2">
        Explore the services we offer to help your business grow.
      </p>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {servicesData.map((service) => (
          <div
            key={service.id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="bg-gray-100 p-4 rounded-lg shadow-md transition-colors duration-300"
          >
            <Image
              src={service.image}
              alt={service.name}
              width={400}
              height={250}
              className="rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4">{service.name}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
