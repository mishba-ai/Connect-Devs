
import Sidebar from "../components/Sidebar"

const ProfilePage = () => {
  return (
    <div className="flex p-6 bg-background">
      <div className="">
        <Sidebar
       
          style={{ position: "sticky", top:"0px" , backgroundColor:"" , height:"93vh" , borderRadius:"35px" }}
        />
      </div>
    </div>
  )
}

export default ProfilePage