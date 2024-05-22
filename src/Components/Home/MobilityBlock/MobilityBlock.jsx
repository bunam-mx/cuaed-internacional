import { NavLink } from "react-router-dom";
import "./MobilityBlock.css";

function MobilityBlock() {
    return (
      <section className="mobility-block">
        <article className="mobility-block__central">
          <div className="mobility-block__central--block">
            <h2>Movilidad estudiantil</h2>
            <h3>Navega la diversidad, conquista tu futuro</h3>
            <p>La UNAM abre sus puertas al mundo con su programa de movilidad estudiantil, ofreciendo una experiencia única de intercambio cultural y académico. Sumérgete en nuevas culturas, conecta con estudiantes internacionales y amplía tu conocimiento en prestigiosas universidades. Descubre, aprende y vive tu carrera desde una perspectiva global. ¡Únete y transforma tu futuro con la movilidad estudiantil de la UNAM!</p>
            <p className="mobility-block__central--block-link">
              <NavLink to="movilidad">Más información</NavLink>
            </p>
          </div>
          <div className="mobility-block__central--pictures">
            <img src="/images/mobility-students.jpg" alt="" className="col-span-2" /><img src="/images/mobility-student.jpg" alt="" /><img src="/images/mobility-classroom.jpg" alt="" />
          </div>
        </article>
      </section>
    )
}

export default MobilityBlock;
