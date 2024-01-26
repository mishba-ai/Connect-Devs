import Sidebar from "../components/Sidebar";
import Sidebarlinks from "../components/Sidebarlinks";
function challenge() {
  return (
    <div className="flex gap-x-12 bg-background h-screen w-full">
      <div className="">
        <Sidebar
          links={<Sidebarlinks />}
          style={{
            position: "sticky",
            top: "0px",
            backgroundColor: "",
            height: "93vh",
            borderRadius: "35px",
            margin: "24px",
          }}
        />
      </div>
    </div>
  );
}

export default challenge;
