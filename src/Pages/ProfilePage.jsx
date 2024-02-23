import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
const ProfilePage = () => {
  return (
    <div className="">
      <section className="flex  h-screen gap-x-12 bg-background w-full">
        <Sidebar style={{}} />
        <div className="flex-col w-full mt-10">
          <div>
            <Header page="Profile" />
          </div>
          <div className="flex flex-col justify-center items-center">
                <img src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg" className="w-28 h-28 rounded-full" alt="pfp" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
