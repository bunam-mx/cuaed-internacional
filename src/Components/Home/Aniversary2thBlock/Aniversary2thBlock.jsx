import "./Aniversary2thBlock.css";

function Aniversary2thBlock() {
  return (
    <section className="aniversary2th-block">
      <article className="aniversary2th-block__image">
        <img src="images/aniversary2th.png" alt="" />
        <h2>Sirviendo a SUAyED desde mayo 1, 2024</h2>
      </article>
      <article className="aniversary2th-block__data">
        <h2>COIL (<em>Collaborative online international learning</em>)</h2>
        <ul>
          <li><span>118</span> COIL facilitados</li>
          <li>COILers: <span>124</span> profesores y alrededor de <span>1,750</span> estudiantes de la UNAM</li>
          <li><span>15</span> países de <span>3</span> continentes</li>
          <li><span>44</span> universidades extranjeras</li>
          <li><span>45</span> talleres de formación inicial para <span>1,115</span> docentes</li>
          <li><span>5</span> talleres de Educación continua COIL para <span>136</span> docentes</li>
        </ul>
        <div className="ml-5">
          <h3>Global Hybrid Classroom</h3>
          <ul>
            <li><span>326</span> estudiantes UNAM inscritos en <span>62</span> cursos de Tsinghua University /China y <span>7</span> en <span>4</span> cursos de Saint Petersburg University / Rusia</li>
            <li>En 2026 por primera vez 3 estudiantes de <span>Mongolian University of Science and Technology</span> y de <span>Universidade Federal do Rio de Janeiro</span> en dos cursos de la UNAM</li>
          </ul>
        </div>
        <h2>En alianza con CALED</h2>
        <ul>
          <li><span>Revisión sistemática</span> de la literatura COIL en Latinoamérica 2004-2025</li>
          <li><span>Modelo para la implementación y evaluación de COIL en programas de educación a distancia, digital, mixta y/o en línea</span> (en dictamen internacional)</li>
        </ul>
      </article>
    </section>
  );
}

export default Aniversary2thBlock;