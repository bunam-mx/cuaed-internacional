import { Link } from "react-router-dom";
import "./ScholarshipsBlock.css";

function ScholarshipsBlock() {
  return (
    <section className="scholarships-block" id="becas">
      <div className="scholarships-block__content">
        <h2>Becas</h2>
        <div className="scholarships-block__content--scholarship">
          <div className="scholarships-block__content--scholarship-item">
            <a
              href="https://bunam.unam.mx/cdn/docs/convocatoriaPAECI_jun2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Programa para actividades especiales de cooperación
              interinstitucional (PAECI) con fines de internacionalización para
              alumnos y egresados de la licenciatura de la UNAM
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScholarshipsBlock;
