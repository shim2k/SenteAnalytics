import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-gray-100 to-blue-100">
      <div className="text-center space-y-10 px-6 mb-50">
        <h1 className="text-9xl font-extrabold text-blue-800 mb-8">
          404
        </h1>
        <p className="text-2xl text-gray-700 mb-12">
          We can't seem to find the page you're looking for.
        </p>
        <Link href="/" className="inline-block px-12 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
