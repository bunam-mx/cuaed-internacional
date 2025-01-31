import OfferingBlock from "./OfferingBlock";
import WhatIsBlock from "./WhatIsBlock";
import TestimonialsBlock from "./TestimonialsBlock";

function COILBlock() {
  return (
    <div id="coil" className="min-h-screen flex items-center">
      <div className="container mx-auto grid grid-cols-3 lg:grid-cols-4 gap-10">
        <div className="">
          <OfferingBlock />
        </div>
        <div className="col-span-2 lg:col-span-3">
          <div className="grid grid-cols-2 gap-10">
            <WhatIsBlock />
            <div>
              <a href="mailto:internacional@cuaed.unam.mx" className="block p-4 align-middle">¿Quieres una formación con tus colegas SUAyED</a>
            </div>
          </div>
          <div className="p-10 bg-cuaed-white rounded-lg">
            <TestimonialsBlock />
          </div>
        </div>
      </div>      
    </div>
  );
}

export default COILBlock;
