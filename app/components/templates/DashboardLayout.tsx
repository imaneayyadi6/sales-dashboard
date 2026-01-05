export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Sales Dashboard</h1>
        <p className="text-gray-600">
          Frontend dashboard built with Next.js 15 & Atomic Design
        </p>
      </header>

      {children}
    </main>
  );
}
