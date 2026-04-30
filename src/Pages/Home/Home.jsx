import HeroBlock from "../../Components/Home/HeroBlock/HeroBlock";
import CoilBlock from "../../Components/Home/CoilBlock/CoilBlock";
import OfferingBlock from "../../Components/Home/OfferingBlock/OfferingBlock";
// import ScholarshipsBlock from "../../Components/Home/ScholarshipsBlock/ScholarshipsBlock";
import GHCBlock from "../../Components/Home/GHCBlock/GHCBlock";
import Aniversary2thBlock from "../../Components/Home/Aniversary2thBlock/Aniversary2thBlock";

function Home() {
  return (
    <>
      <Aniversary2thBlock />
      <HeroBlock />
      <CoilBlock />
      <OfferingBlock />
      <GHCBlock />
    </>
  );
}

export default Home;
