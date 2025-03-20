import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      {/* Banner Image */}
      <div className="relative w-full h-64">
        <Image
          src="/images/tech.jpeg" // Place in "public/banner.jpg"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Featured Section */}
      <section className="mt-10 bg-blue-100 py-10 px-6 rounded-lg">
        <h2 className="text-3xl font-bold text-blue-600">Why Choose Us?</h2>
        <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
          We build amazing digital solutions to help businesses grow. Our expertise in Web Development, 
          UI/UX Design, and SEO ensures that your online presence stands out.
        </p>
        <Link
          href="/about"
          className="inline-block bg-blue-600 text-white px-6 py-2 mt-6 rounded-md hover:bg-blue-800 transition"
        >
          Learn More About Us
        </Link>
      </section>
    </div>
  );
}
