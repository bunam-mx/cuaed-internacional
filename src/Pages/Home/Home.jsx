import HeroBlock from "../../Components/Home/HeroBlock/HeroBlock";
import CoilBlock from "../../Components/Home/CoilBlock/CoilBlock";
import OfferingBlock from "../../Components/Home/OfferingBlock/OfferingBlock";
// import ScholarshipsBlock from "../../Components/Home/ScholarshipsBlock/ScholarshipsBlock";
import GHCBlock from "../../Components/Home/GHCBlock/GHCBlock";

function Home() {
  return (
    <>
      <div className="mx-auto py-20 px-10">
        <img src="images/internacional-2aniversario.jpeg" className="mx-auto" alt="" />
      </div>
      <HeroBlock />
      <CoilBlock />
      <OfferingBlock />
      <GHCBlock />
    </>
  );
}

export default Home;
