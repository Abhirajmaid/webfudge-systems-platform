export default function VendorHome() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 to-rose-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Vendor Portal
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Vendor Management & Licensing - Next.js with Tailwind CSS
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-rose-600 mb-2">Dashboard</h3>
              <p className="text-gray-600">Overview and analytics</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-rose-600 mb-2">Licenses</h3>
              <p className="text-gray-600">Manage licenses</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-rose-600 mb-2">Organizations</h3>
              <p className="text-gray-600">Client organizations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-rose-600 mb-2">Revenue</h3>
              <p className="text-gray-600">Track revenue</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
