//import ImageCarousel from "./CarouselBlock";
import "./GHCBlock.css";

function GHCBlock() {
  /*const images = [
    "images/fisico-matematicas.jpeg",
    "images/humanidades.jpeg",
    "images/ciencias.jpeg",
    "images/economico-administrativa.jpeg",
  ];*/
  return (
    <section id="ghc" className="ghc">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10">
        <div>
          <h2>Global Hybrid Classroom</h2>
          <h3>De la UNAM para el extranjero</h3>
          <img src="images/unam-extranjero.png" alt="De la UNAM para el extranjero" />
        </div>
        <div>
          <h3 className="mt-24">Oferta para estudiantes</h3>
          <img src="images/oferta-ghc.png" alt="Oferta para estudiantes" />
        </div>
      </div>
    </section>
  );
}

export default GHCBlock;
