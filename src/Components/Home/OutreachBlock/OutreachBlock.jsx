import "./OutreachBlock.css";

function OutreachBlock() {
  return (
    <div className="outreach-block" id="vinculacion">
      <div className="outreach-block__container">
        <h2>Vinculación</h2>
        <p>La UNAM mantiene una sólida vinculación con instituciones de prestigio. A través de colaboraciones, proyectos conjuntos y programas de movilidad, se fomenta el intercambio académico y la innovación en la educación a distancia.</p>
        <div className="outreach-block__container--institutions">
          <div><a href="https://www.jwel.mit.edu/" target="_blank" rel="noopener noreferrer"><img src="/images/mit_j-wel-logo.png" alt="" width={616} /></a></div>
          <div><a href="https://www.icde.org/" target="_blank" rel="noopener noreferrer"><img src="/images/icde-logo.png" alt="" width={296} /></a></div>
        </div>
      </div>
    </div>
  )
}

export default OutreachBlock;
