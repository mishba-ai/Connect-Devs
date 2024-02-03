import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
function challenge() {
  return (
    <div className="">
      <section className="flex gap-x-12 bg-background h-screen w-full">
        <div>
          <Sidebar style={{}} />
        </div>
        <div className="flex-col w-full mt-10">
          <div>
            <Header page="Challenges" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default challenge;
