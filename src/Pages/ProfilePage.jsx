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
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
