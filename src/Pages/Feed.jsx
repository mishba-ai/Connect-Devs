
import Sidebar from "../components/Sidebar"
import Sidebarlinks from "../components/Sidebarlinks"
const Feed = () => {
  return (
    <div className="flex p-6 bg-background">
    <div className="">
      <Sidebar
        links={<Sidebarlinks />}
        style={{ position: "sticky", top:"0px" , backgroundColor:"" , height:"93vh" , borderRadius:"35px" }}
      />
    </div>
  </div>
  )
}

export default Feed