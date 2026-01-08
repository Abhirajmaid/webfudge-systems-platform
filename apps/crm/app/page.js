import Link from 'next/link';

export default function CRMHome() {
  return (
    <main className="min-h-screen bg-gradient-warm">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            CRM Application
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Customer Relationship Management - Next.js with Tailwind CSS
          </p>

          {/* Test Components Link */}
          <div className="mb-8">
            <Link
              href="/components-test"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-brand hover:shadow-brand-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              View UI Components Showcase
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-orange-600 mb-2">Leads</h3>
              <p className="text-gray-600">Manage your leads effectively</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-orange-600 mb-2">Contacts</h3>
              <p className="text-gray-600">Track all customer contacts</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold text-orange-600 mb-2">Deals</h3>
              <p className="text-gray-600">Close more deals faster</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
