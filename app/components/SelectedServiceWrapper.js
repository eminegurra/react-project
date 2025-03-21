"use client";
import { useState } from "react";
import ServiceSelector from "./ServiceSelector";
import ServicePreview from "./ServicePreview";
import { servicesData } from "../data";



export default function SelectedServiceWrapper() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow rounded">
      <h2 className="text-xl font-bold text-center mb-4">Our Services</h2>
      <ServiceSelector services={servicesData} onSelect={setSelectedService} />
      <ServicePreview service={selectedService} />
    </div>
  );
}
