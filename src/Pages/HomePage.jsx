import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Sidebarlinks from "../components/Sidebarlinks.jsx";
import Cards from "../components/Cards.jsx";
const HomePage = () => {
  return (
    <div className="">
      <Header />
      <div className="mt-4 flex gap-x-16">
        <Sidebar links={<Sidebarlinks />} style={{position:'sticky',top:'88px'}} />
        <div className="flex flex-col">
          <ul className="list-none">
            <li>
              {" "}
              <p className="font-mono text-3xl font-semibold  ">Dashboard</p>
              <br />
              <Cards />
            </li>
            <li>
               <p className="font-mono text-3xl font-semibold mt-4"> Suggeted Projects</p>
               <br />
                <Cards />
            </li>
            <li>
               <p className="font-mono text-3xl font-semibold mt-4">Pair Request</p>
               <br />
                <Cards />
            </li>
            <li>
               <p className="font-mono text-3xl font-semibold mt-4">Top Hackers</p>
               <br />
                <Cards />
            </li>
          </ul>

         
        </div>

        <Sidebar style={{ width: "400px", borderRadius: "25px" }} />
      </div>
    </div>
  );
};

export default HomePage;
