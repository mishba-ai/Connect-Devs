export default function ActiveProjectCard() {
  const activeProjects = {
    "AI search based": {
      skils: ["reactjs,django,ai-integration"],
      project: "Ai-based search engine",
      icon: "",
      progress: "",
    },
    "E-commerce website": {
      skils: ["reactjs,tailwindcss,expressjs,mongodb"],
      project: "E-commerce website",
      icon: "",
      progress: "",
    },
    "Agentic model": {
      Skills: ["python,langchain,openai"],
      project: "Agentic model",
      icon: "",
      progress: "",
    },
  };

  return (
    <>
      <div className="w-[650px] h-[350px] bg-black border-cyan  rounded-sm  shadow-[4px_4px_0px_rgb(255,255,255)]  border-2 ">
        <ul>
          {Object.entries(activeProjects).map(([key, value]) => (
            <li key={key} className="p-4  border-green">
              <h3 className="text-lg font-semibold">{/* {value.project} */}</h3>
              <p className="text-sm text-gray-600">
                {/* Skills: {value.skils.join(", ")} */}
              </p>
              <div className="mt-2">
                <span className="inline-block bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                  {/* {value.progress || "In Progress"} */}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
