'use client';

export default function Newsletter() {
  return (
    <section className="bg-[#e9f1f7] py-10 px-6 md:px-10 rounded-2xl text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        Join Our Travel World
      </h2>
      <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
        Subscribe to our newsletter for exclusive travel deals, visa updates, expert travel tips, and early access to special offers. Start your journey with us!
      </p>
      <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 px-4 py-2 rounded-md bg-[#003366] text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-[#003366] text-white rounded-md hover:bg-[#002244] transition-all"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
