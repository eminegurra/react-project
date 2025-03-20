import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white py-4 px-6 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* App Name */}
        <Link href="/" className="text-2xl font-bold">
          MyApp
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About Us
          </Link>
          <Link href="/services" className="hover:underline">
            Services
          </Link>
        </div>
      </div>
    </nav>
  );
}
