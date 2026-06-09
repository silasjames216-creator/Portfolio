export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'MongoDB', 'PostgreSQL'],
    },
    {
      category: 'Tools',
      skills: ['Git', 'Docker', 'AWS', 'GitHub', 'VS Code'],
    },
    {
      category: 'Other',
      skills: ['REST APIs', 'GraphQL', 'Testing', 'DevOps', 'Agile'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Skills & Technologies</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-gray-700">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
