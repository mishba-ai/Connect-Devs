import { Heart } from "lucide-react";

export default function ProjectSpotlight() {
  const activeProjects = [
    {
      id: 1,
      name: "ChillQuest",
      description: "ChillQuest is an interactive...",
      likes: 335,
      projectIcon: "https://i.pinimg.com/736x/e4/c2/9f/e4c29f022564f7feb2454c24d17f9b2d.jpg",
      teamMembers: [
        { id: 1, avatar: "👨‍💻", name: "Developer 1" },
        { id: 2, avatar: "https://i.pinimg.com/1200x/79/b4/19/79b41920af7f33267cc4ca764bcc043d.jpg", name: "Developer 2" },
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
      projectIcon: "https://i.pinimg.com/1200x/fd/7f/bb/fd7fbb8011227ffd6ecd72b32afc2705.jpg",
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
      projectIcon: "https://i.pinimg.com/736x/ac/67/b2/ac67b29518c3ba87411089ce5f75ac61.jpg",
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
      projectIcon: "https://i.pinimg.com/736x/98/bf/64/98bf64046f498f42a97e061830295ba0.jpg",
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
    <div className="w-[600px] h-[500px] flex flex-col  justify- items- bg-gray-50 rounded-sm border hover:shadow-[4px_4px_0px_rgb(0,0,0)] border-black p-6">
      {/* Header */}
      <h1 className="text-2xl  text-gray-500 ">PROJECT SPOTLIGHT</h1>
      <ul className="flex gap-4 flex-col mt-2">
        {/*  */}
        {activeProjects.map((project, index) => {
          return (
            <li className="flex gap-x-4 border- border transition-transform scale-  " key={index}>
              <div className="w-20 h-20 rounded-xl  ">
                <img src={project.projectIcon} className="bg-cover w-full h-full rounded-xl" />
              </div>
              <div className="w-20 h-20 border-2 border-gray-300  rounded-xl">
                <div className="flex justify-center items-cente p-1 rounded-xl w-full h-full  flex-wrap">
                  {project.teamMembers.map((member, index) => {
                    return (
                      <div key={index} className="w-8 transition-transform scale-80 rounded-xl h-8 bg-red border-black ">
                        <img src={member.avatar} alt="avatar" className="w-8 h-8 bg-cover rounded-xl" />
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="border-2 border-gray-300 rounded-xl flex-1 p-4 flex justify-between">
                <div>
                  <h1>{project.name}</h1>
                  <p>{project.description}</p>
                </div>
                <div className="px-4 border border-black flex flex-col justify-center items-center">
                  <Heart size={16} />
                  <p>{project.likes}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
}