import { NavLink } from "react-router-dom";
import "./OportunitiesBlock.css";

function OportunitiesBlock() {
  return (
    <section className="oportunities-block">
      <div className="oportunities-block__cuaed-internacional">
        <img
          src="/images/cuaed-internacional.png"
          alt="CUAED Internacional"
          width={200}
        />
      </div>
      <div className="oportunities-block__oportunities">
        <div className="oportunities-block__oportunities--row-legend">
          <div>&nbsp;</div>
          <div>
            <h2>Población beneficiada</h2>
          </div>
        </div>
        <div className="oportunities-block__oportunities--row-titles">
          <div>&nbsp;</div>
          <div>Estudiantes</div>
          <div>Docentes</div>
          <div>Funcionarios</div>
        </div>
        <div className="oportunities-block__oportunities--row">
          <div className="oportunities-block__oportunities--row-link">
            <NavLink to="/coil">COIL</NavLink>
          </div>
          <div className="oportunities-block__oportunities--row-filled">
            &nbsp;
          </div>
          <div className="oportunities-block__oportunities--row-filled">
            &nbsp;
          </div>
          <div>&nbsp;</div>
        </div>
        <div className="oportunities-block__oportunities--row">
          <div>Becas</div>
          <div className="oportunities-block__oportunities--row-filled">
            &nbsp;
          </div>
          <div className="oportunities-block__oportunities--row-filled">
            &nbsp;
          </div>
          <div className="oportunities-block__oportunities--row-filled">
            &nbsp;
          </div>
        </div>
        <div className="oportunities-block__oportunities--row">
          <div>Certámenes</div>
          <div className="oportunities-block__oportunities--row-filled">
            &nbsp;
          </div>
          <div className="oportunities-block__oportunities--row-filled">
            &nbsp;
          </div>
          <div className="oportunities-block__oportunities--row-filled">
            &nbsp;
          </div>
        </div>
        <div className="oportunities-block__oportunities--row">
          <div>Vinculación</div>
          <div>&nbsp;</div>
          <div className="oportunities-block__oportunities--row-filled">
            &nbsp;
          </div>
          <div className="oportunities-block__oportunities--row-filled">
            &nbsp;
          </div>
        </div>
      </div>
    </section>
  );
}

export default OportunitiesBlock;
