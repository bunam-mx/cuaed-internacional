import "./HeroBlock.css";

function HeroBlock() {
  return (
    <section className="hero-block">
      <article className="hero-block__central">
        <div>
          <img
            src="/images/cuaed-internacional-blanco.png"
            alt="CUAED Internacional"
            width={320}
          />
          <p className="my-10">
            En CUAED Internacional tenemos la misión de contribuir a la
            internacionalización de estudiantes, docentes y funcionarios del
            SUAyED a través de su participación en experiencias COIL, programas
            de movilidad internacional, y del aprovechamiento de los vínculos
            internacionales existentes y la creación de nuevas alianzas, con el
            fin de potenciar su sensibilidad y competencias multiculturales.
          </p>
        </div>
        <div className="hero-block__central--mission">
          <h2>Misión</h2>
          <p>Promover la internacionalización en el SUAyED a través de:</p>
          <ul>
            <li>experiencias COIL</li>
            <li>programas de movilidad internacional, y</li>
            <li>
              aprovechamiento de los vínculos internacionales existentes y la
              creación de nuevas alianzas
            </li>
          </ul>
          <p>
            para que más estudiantes, docentes y funcionarios SUAyED aprendan
            mientras potencian su sensibilidad y competencias multiculturales.
          </p>
        </div>
      </article>
    </section>
  );
}

export default HeroBlock;
