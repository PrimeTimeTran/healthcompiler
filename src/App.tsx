const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-emerald-400">HealthCompiler HubSpot Theme</h1>
        <p className="text-xl text-slate-300 mb-8">
          This project contains HubL templates and modules for HubSpot CMS deployment.
        </p>
        
        <div className="bg-slate-800 rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-300">📁 Theme Location</h2>
          <code className="bg-slate-700 px-3 py-1 rounded text-emerald-400">healthcompiler-theme/</code>
        </div>

        <div className="bg-slate-800 rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-300">📦 Modules</h2>
          <ul className="space-y-2 text-slate-300">
            <li>• hero.module - Hero sections</li>
            <li>• solution-hero.module - Solution page heroes</li>
            <li>• solution-content.module - Solution details</li>
            <li>• feature-cards.module - Feature cards grid</li>
            <li>• feature-image-grid.module - Image/text features</li>
            <li>• benefits-grid.module - Benefits display</li>
            <li>• testimonials.module - Customer testimonials</li>
            <li>• industries-grid.module - Industries served</li>
            <li>• cta-banner.module - Call to action</li>
            <li>• footer.module - Site footer</li>
          </ul>
        </div>

        <div className="bg-slate-800 rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-300">📄 Templates</h2>
          <ul className="space-y-2 text-slate-300">
            <li>• home.html - Home page</li>
            <li>• direct-primary-care.html</li>
            <li>• concierge-medicine.html</li>
            <li>• functional-medicine.html</li>
            <li>• employers.html</li>
            <li>• acos.html</li>
            <li>• brokers-advisors.html</li>
          </ul>
        </div>

        <div className="bg-slate-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-300">🚀 Deployment</h2>
          <p className="text-slate-300 mb-4">To deploy to HubSpot CMS:</p>
          <ol className="list-decimal list-inside space-y-2 text-slate-300">
            <li>Install HubSpot CLI: <code className="bg-slate-700 px-2 py-1 rounded">npm install -g @hubspot/cli</code></li>
            <li>Initialize: <code className="bg-slate-700 px-2 py-1 rounded">hs init</code></li>
            <li>Upload theme: <code className="bg-slate-700 px-2 py-1 rounded">hs upload healthcompiler-theme healthcompiler-theme</code></li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default App
