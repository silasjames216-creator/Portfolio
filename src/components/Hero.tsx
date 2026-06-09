import Image from 'next/image';

export default function Hero() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm Silas James
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              A motivated Computer Science student passionate about web development and graphics design.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              I create beautiful digital experiences through web development and graphic design. Specializing in Python, React, Next.js, and CorelDraw design.
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
          <div className="bg-blue-200 rounded-lg aspect-square flex items-center justify-center overflow-hidden relative">
            <Image
              src="/profile.jpg"
              alt="Silas James"
              fill
              className="object-cover"
              priority
              quality={80}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
