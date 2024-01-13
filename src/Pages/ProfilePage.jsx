import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Sidebarlinks from "../components/Sidebarlinks"
const ProfilePage = () => {
  return (
    <div className="bg-background">
      <Header />
      <div className="flex mt-4">
      <Sidebar links={<Sidebarlinks />} style={{position:'sticky',top:'88px'}} />
        
      </div>
    </div>
  )
}

export default ProfilePage