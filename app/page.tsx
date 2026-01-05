import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="max-w-xl bg-white p-8 rounded-xl shadow text-center">
        <h1 className="text-3xl font-bold mb-4">
          Sales Dashboard
        </h1>

        <p className="text-gray-600 mb-6">
          This project is a frontend sales dashboard built with Next.js 15,
          TypeScript, Tailwind CSS, and Atomic Design principles.
        </p>

        <Link
          href="/dashboard"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
        >
          View Sales Dashboard
        </Link>
      </div>
    </main>
  );
}
