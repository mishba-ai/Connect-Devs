import { Heart } from "lucide-react";

export default function ActiveProjectCard() {
  const activeProjects = [
    {
      id: 1,
      name: "ChillQuest",
      description: "ChillQuest is an interactive...",
      likes: 335,
      projectIcon: "🎮",
      teamMembers: [
        { id: 1, avatar: "👨‍💻", name: "Developer 1" },
        { id: 2, avatar: "😊", name: "Developer 2" },
        { id: 3, avatar: "🙂", name: "Developer 3" },
        { id: 4, avatar: "😄", name: "Developer 4" }
      ],
      skills: ["reactjs", "django", "ai-integration"],
      color: "bg-teal-400"
    },
    {
      id: 2,
      name: "LAP: Liquidity Auction...",
      description: "Liquidity Auction Protocol, that...",
      likes: 160,
      projectIcon: "🌊",
      teamMembers: [
        { id: 1, avatar: "👨‍💼", name: "Developer 1" },
        { id: 2, avatar: "👨‍🎓", name: "Developer 2" }
      ],
      skills: ["reactjs", "tailwindcss", "expressjs", "mongodb"],
      color: "bg-blue-500"
    },
    {
      id: 3,
      name: "Matrix",
      description: "Learn new languages in fun way",
      likes: 157,
      projectIcon: "🎯",
      teamMembers: [
        { id: 1, avatar: "👨‍🏫", name: "Developer 1" },
        { id: 2, avatar: "👨‍💻", name: "Developer 2" },
        { id: 3, avatar: "👨‍🎨", name: "Developer 3" },
        { id: 4, avatar: "👩‍💻", name: "Developer 4" }
      ],
      skills: ["python", "langchain", "openai"],
      color: "bg-gray-800"
    },
    {
      id: 4,
      name: "Retrace",
      description: "Reversing your transactions on th...",
      likes: 144,
      projectIcon: "🔄",
      teamMembers: [
        { id: 1, avatar: "👨‍💼", name: "Developer 1" },
        { id: 2, avatar: "👨‍🔬", name: "Developer 2" },
        { id: 3, avatar: "👨‍💻", name: "Developer 3" },
        { id: 4, avatar: "👩‍💼", name: "Developer 4" }
      ],
      skills: ["blockchain", "web3", "solidity"],
      color: "bg-black"
    }
  ];

  return (
    <div className="w-[750px] h-[600px] bg-gray-50 border-black rounded-xs shadow-[4px_4px_0px_rgb(0,0,0)] border-2 p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-500 tracking-wider uppercase">
          Projects Spotlight
        </h2>
      </div>

      {/* Projects List */}
      <div className="space-y-4 overflow-y- h-[350px]">
        {activeProjects.map((project) => (
          <div
            key={project.id}
            className="flex items-center gap-4 p-3 bg- rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
          >
            {/* Project Icon */}
            <div className={`w-18 h-18 ${project.color} rounded-lg transition-transform scale-110 flex items-center justify-center text-2xl shrink-0`}>
              {project.projectIcon}
            </div>

            {/* Team Members Avatars */}
            <div className="flex flex-col gap-2 shrink-0">
              <div className="flex -space-x-2">
                {project.teamMembers.slice(0, 2).map((member) => (
                  <div
                    key={member.id}
                    className="w-8 h-8 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center text-sm"
                    title={member.name}
                  >
                    {member.avatar}
                  </div>
                ))}
              </div>
              {project.teamMembers.length > 2 && (
                <div className="flex -space-x-2">
                  {project.teamMembers.slice(2, 4).map((member) => (
                    <div
                      key={member.id}
                      className="w-8 h-8 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center text-sm"
                      title={member.name}
                    >
                      {member.avatar}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Project Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                {project.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1 mt-2">
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Likes */}
            <div className="flex flex-col items-center gap-1 shrink-0">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
              </button>
              <span className="text-xl font-bold text-gray-900">
                {project.likes}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}