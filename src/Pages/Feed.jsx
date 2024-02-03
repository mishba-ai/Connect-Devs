import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
const Feed = () => {
  return (
    <div className="">
      <section className="flex gap-x-12  h-screen w-full  bg-background">
        <Sidebar style={{}} />
        <div className="flex-col  w-full mt-10">
          <div>
            <Header page="Feed" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feed;
