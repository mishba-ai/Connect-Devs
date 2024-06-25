import message from "../assets/message.svg";

const Connections = () => {
  return (
    <div>
      <ul className="mt-6 space-y-2 ">
        <li className="flex p-1 gap-x-1">
          <img
            src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
            alt="img"
            className="rounded-full w-12 h-12"
          />
          <div className=" text-white ml-2 flex justify-between  w-full">
            <div>
              <p className="font-Archivo text-lg font-extrabold ">John Doe</p>
              <p className=" font-Archivo text-sm text-gray-400">2nd</p>{" "}
            </div>
            <div className="flex items-center">
              <img src={message} alt="message" className="w-6  h-6" />
            </div>
          </div>
        </li>
        
        <li className="flex p-1 gap-x-1">
          <img
            src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
            alt="img"
            className="rounded-full w-12 h-12"
          />
          <div className=" text-white ml-2 flex justify-between  w-full">
            <div>
              <p className="font-Archivo text-lg font-extrabold ">Janvi</p>
              <p className=" font-Archivo text-sm text-gray-400">2nd</p>{" "}
            </div>
            <div className="flex items-center">
              <img src={message} alt="message" className="w-6  h-6" />
            </div>
          </div>
        </li>

        <li className="flex p-1 gap-x-1">
          <img
            src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
            alt="img"
            className="rounded-full w-12 h-12"
          />
          <div className=" text-white ml-2 flex justify-between  w-full">
            <div>
              <p className="font-Archivo text-lg font-extrabold ">Ayan</p>
              <p className=" font-Archivo text-sm text-gray-400">2nd</p>{" "}
            </div>
            <div className="flex items-center">
              <img src={message} alt="message" className="w-6  h-6" />
            </div>
          </div>
        </li>

        <li className="flex p-1 gap-x-1">
          <img
            src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
            alt="img"
            className="rounded-full w-12 h-12"
          />
          <div className=" text-white ml-2 flex justify-between  w-full">
            <div>
              <p className="font-Archivo text-lg font-extrabold ">krishti</p>
              <p className=" font-Archivo text-sm text-gray-400">2nd</p>{" "}
            </div>
            <div className="flex items-center">
              <img src={message} alt="message" className="w-6  h-6" />
            </div>
          </div>
        </li>

        <li className="flex p-1 gap-x-1">
          <img
            src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
            alt="img"
            className="rounded-full w-12 h-12"
          />
          <div className=" text-white ml-2 flex justify-between  w-full">
            <div>
              <p className="font-Archivo text-lg font-extrabold ">Abraham</p>
              <p className=" font-Archivo text-sm text-gray-400">2nd</p>{" "}
            </div>
            <div className="flex items-center">
              <img src={message} alt="message" className="w-6  h-6" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Connections;
