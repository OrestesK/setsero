export default function Home() {
  const projects = [{ name: "AI Coder", url: "https://ai-coder.setsero.dev" }];

  return (
    <main className="flex flex-col h-screen justify-center items-center text-center bg-gray-900 text-white">
      <div className="text-7xl font-bold mb-8">Orestes</div>
      <div className="text-2xl mb-4">Project Hub</div>
      <ul className="space-y-4">
        {projects.map((project, index) => (
          <li key={index}>
            <a
              href={project.url}
              className="text-xl text-blue-400 hover:text-blue-300 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
