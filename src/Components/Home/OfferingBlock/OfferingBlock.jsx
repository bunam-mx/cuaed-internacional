import TestimonialsBlock from "./TestimonialsBlock";
import "./OfferingBlock.css";

function OfferingBlock() {
  return (
    <div id="offering" className="min-h-screen flex items-center">
      <div className="container mx-auto grid grid-cols-3 lg:grid-cols-4 gap-10">
        <div className="">
          <h2>Oferta COIL</h2>
          <p>
            <img src="images/suayed-logo.jpg" width={160} alt="" />
          </p>
          <a
            href="docs/oferta-coil.pdf"
            target="_blank"
            className="block mt-6 hover:shadow-lg"
          >
            <img
              alt=""
              src="images/oferta-coil.jpg"
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
          </a>
          <div>
            <a className="formations" href="mailto:internacional@cuaed.unam.mx">¿Quieres una formación con tus colegas SUAyED?</a>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-3 p-10 bg-gray-50 rounded-lg">
          <h2>Testimonios</h2>
          <div className="p-10">
            <TestimonialsBlock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferingBlock;
