import "./MissionBlock.css";

function MissionBlock() {
  return (
    <section className="mission-block">
      <div className="mission-block__content">
        <div className="mission-block__content--image">
          <img
            src="/images/mission-block.jpg"
            alt="La misión de CUAED Internacional"
            width={480}
          />
        </div>
        <div className="mission-block__content--text">
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
      </div>
    </section>
  );
}

export default MissionBlock;
