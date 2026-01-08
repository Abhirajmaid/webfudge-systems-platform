export default function PMHome() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Project Management
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Manage Projects & Tasks - Next.js with Tailwind CSS
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-purple-600 mb-2">Projects</h3>
              <p className="text-gray-600">Organize and track projects</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-purple-600 mb-2">Tasks</h3>
              <p className="text-gray-600">Manage tasks efficiently</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-purple-600 mb-2">Reports</h3>
              <p className="text-gray-600">Track progress and performance</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
