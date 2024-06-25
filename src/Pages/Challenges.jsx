import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import dodonutglobe from "../assets/dodonutglobe.png";
const Challenges = () => {
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
            <div className="flex justify-center items-center">
              <img src={dodonutglobe} alt="" className="h-[32rem] w-[36rem]"/>
            </div>
          </div>
        </section>
      </div>
  )
}

export default Challenges