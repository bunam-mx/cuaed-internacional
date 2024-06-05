import "./CoilBlock.css";

function CoilBlock() {
  return (
    <section className="coil-block">
      <div className="coil-ribbon">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="coil-block__content">
        <div className="coil-block__info">
          <article className="coil-block__info--description">
            <h2>COIL UNAM</h2>
            <h3>aprendizaje colaborativo internacional en línea</h3>
            <p>
              Vivir una experiencia internacional a través de un COIL solo
              requiere la voluntad y organización de docentes y estudiantes.
              Desde CUAED Internacional apoyamos a todo SUAyED con talleres
              breves para estructurar el curso de cada docente interesado y,
              para quienes no cuentan con su par académico, con su búsqueda. Si
              bien generalmente hay una evaluación con calificación del COIL,
              cada docente define cómo impacta esa nota a la calificación final
              del curso donde el COIL se inserta.
            </p>
          </article>
          <article className="coil-block__info--options">
            <img src="/images/coil-block.jpg" alt="Elementos COIL" />
          </article>
          <article className="coil-block__info--resources">
            <div>
              <h3>Recursos para elaborar un COIL</h3>
              <p>
                Ponemos a la orden no solo el sitio web de la Comisión COIL
                dependiente de la Dirección General de Cooperación e
                Internacionalización de la UNAM, sino también una variedad de
                recursos para lograr una experiencia productiva, interesante y
                agradable para diseñar y operar estas experiencias.
              </p>
            </div>
            <div>
              <ul>
                <li>
                  Sitio web:{" "}
                  <a
                    href="https://coil.unam.mx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    coil.unam.mx
                  </a>
                </li>
                <li>
                  <a
                    href="https://coil.unam.mx/#/recursos/tutorial"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tutorial de 9 minutos
                  </a>
                </li>
                <li>Cuaderno de creación de un COIL</li>
                <li>Talleres y pláticas en su entidad universitaria</li>
                <li>
                  Asesoría a lo largo de la planeación, implementación y
                  seguimiento
                </li>
                <li>
                  <a
                    href="https://coil.unam.mx/#/recursos"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Algunos artículos y eventos que permiten la formación
                    continua
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default CoilBlock;
