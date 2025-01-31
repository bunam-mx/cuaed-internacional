import ImageCarousel from "./CarouselBlock";
import "./GHCBlock.css";

function GHCBlock() {
  const images = [
    "images/fisico-matematicas.jpeg",
    "images/humanidades.jpeg",
    "images/ciencias.jpeg",
    "images/economico-administrativa.jpeg",
  ];
  return (
    <section id="ghc" className="ghc">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10">
        <div>
          <h2>Global Hybrid Classroom</h2>
          <h3>De la UNAM para el extranjero</h3>
          <a
            className="block hover:shadow-lg"
            href="https://ghc.yuketang.cn/pro/portal/trainprojectdetail/488"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="images/researchMethodologyGHC.jpg"
              alt="Research Methodology GHC"
            />
          </a>
          <p className="mt-4">
            Instructor:{" "}
            <span className="text-purple-800">Dra. Alejandrina Hernández</span>
          </p>
        </div>
        <div>
          <h3 className="mt-24">Oferta para estudiantes</h3>
          <ImageCarousel images={images} />
          <p className="mt-6 text-right">
            <a
              href="https://ghc.yuketang.cn/pro/portal/trainprojectdetail/200"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Regístrate antes del <strong>10 de febrero de 2025</strong>.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default GHCBlock;
