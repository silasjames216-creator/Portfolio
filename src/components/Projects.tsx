'use client';

import { useState } from 'react';
import ImageModal from './ImageModal';

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const projects = [
    {
      id: 1,
      title: 'Stephen Classic',
      description: 'Professional logo design showcasing elegant typography and modern branding.',
      tech: ['CorelDraw', 'Branding', 'Logo Design'],
      link: '#',
      image: '/stephen-classic.png',
    },
    {
      id: 2,
      title: 'Corestone Construction',
      description: 'Construction company branding with professional logo design and tagline.',
      tech: ['CorelDraw', 'Logo Design', 'Branding'],
      link: '#',
      image: '/corestone.png',
    },
    {
      id: 3,
      title: 'Lamsy Beauty Empire',
      description: 'Beauty service portfolio design featuring makeup, hair styling, and fashion services.',
      tech: ['CorelDraw', 'Portfolio Design', 'Graphics Design'],
      link: '#',
      image: '/lamsy-beauty.png',
    },
    {
      id: 4,
      title: 'ACF March Campaign',
      description: 'Event promotion design for Association of Christian Students with inspirational messaging.',
      tech: ['CorelDraw', 'Event Design', 'Social Media'],
      link: '#',
      image: '/acf-march.png',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
              <button
                onClick={() => setSelectedImage(project.image)}
                className="w-full cursor-pointer hover:opacity-80 transition"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </button>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedImage(project.image)}
                  className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer"
                >
                  View Full Size →
                </button>
              </div>
            </div>
          ))}
        </div>

        <ImageModal
          isOpen={!!selectedImage}
          imageSrc={selectedImage || ''}
          imageAlt="Design Project"
          onClose={() => setSelectedImage(null)}
        />
      </div>
    </section>
  );
}
