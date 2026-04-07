import ScrollStack from "./components/ScrollStack";

export default function App() {
  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center p-10">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Welcome to Our Website
        </h1>
        <p className="text-gray-600 mt-6 max-w-2xl text-lg md:text-xl">
          Scroll down to see amazing interactive reviews built with Framer Motion.
        </p>
      </section>

      {/* Review Section — pinned card stack */}
      <section className="bg-white py-32">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            What People Are Saying
          </h2>
          <ScrollStack />
        </div>
      </section>

      {/* Footer */}
      <footer className="h-[40vh] bg-gray-900 flex items-center justify-center">
        <p className="text-gray-200 text-sm">&copy; 2025 Your Website</p>
      </footer>
    </div>
  );
}
