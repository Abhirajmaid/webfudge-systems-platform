export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to Webfudge Platform
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Landing Page - Next.js with Tailwind CSS
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/login"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Get Started
            </a>
            <a
              href="/about"
              className="px-6 py-3 bg-white text-indigo-600 rounded-lg border border-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
