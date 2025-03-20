import Image from "next/image";
import { aboutData } from "../data";

export default function About() {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full h-64">
        <Image
          src="/images/about-banner.jpg" // Place an image in "public/about-banner.jpg"
          alt="About Us Banner"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
          <p className="text-gray-300 mt-2">Who we are and what we do</p>
        </div>
      </div>

      {/* Company Description */}
      <section className="max-w-4xl mx-auto py-12 text-center">
        <h2 className="text-3xl font-bold text-blue-600">Our Mission</h2>
        <p className="text-lg text-gray-600 mt-4 leading-relaxed">
          We are committed to delivering high-quality digital solutions that help businesses
          grow. With expertise in Web Development, UI/UX Design, and SEO, we ensure your online
          presence stands out.
        </p>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto py-12">
        <h2 className="text-3xl font-bold text-blue-600 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {aboutData.team.map((member, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
              {/* Profile Image */}
              <div className="relative w-32 h-32 mx-auto">
                <Image
                  src={`/team/${member.image}`} // Place images inside "public/team/"
                  alt={member.name}
                  width={128}
                  height={128}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
