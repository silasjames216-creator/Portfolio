export default function Hero() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm Your Name
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              A passionate full-stack developer building beautiful and functional web experiences.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              I specialize in creating responsive web applications with modern technologies like React, Next.js, and TypeScript.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
              >
                View My Work
              </a>
            </div>
          </div>
          <div className="bg-blue-200 rounded-lg aspect-square flex items-center justify-center">
            <div className="text-6xl">👨‍💻</div>
          </div>
        </div>
      </div>
    </section>
  );
}
