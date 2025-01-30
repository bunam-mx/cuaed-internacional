import "./FooterBlock.css";

function FooterBlock() {
  return (
    <footer className="footer-block">
      <div className="footer-block__container">
        <div className="coil-block__container--info">
          <div>
            <h2>COIL</h2>
            <ul>
              <li>
                <a href="">Estudiantes</a>
              </li>
              <li>
                <a href="">Docentes</a>
              </li>
              <li>
                <a href="">Sitio COIL</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Becas</h2>
            <ul>
              <li>
                <a href="">Estudiantes</a>
              </li>
              <li>
                <a href="">Docentes</a>
              </li>
              <li>
                <a href="">Funcionarios</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Certámenes</h2>
            <ul>
              <li>
                <a href="">Estudiantes</a>
              </li>
              <li>
                <a href="">Docentes</a>
              </li>
              <li>
                <a href="">Funcionarios</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Vinculación</h2>
            <ul>
              <li>
                <a href="">Docentes</a>
              </li>
              <li>
                <a href="">Funcionarios</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Contacto</h2>
            <ul>
              <li>
                <a href="">internacional@cuaed.unam.mx</a>
              </li>
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Instagram</a>
              </li>
              <li>
                <a href="">X</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="coil-block__cointainer--disclaimer">
          <div>
            <h6>Desarrollado por</h6>
            <a href=""><img src="/images/bunam-blanco.png" alt="" width={140} /></a>
          </div>
          <div>
            <h6>Aviso</h6>
            <p>
              Coordinación de Universidad Abierta y Educación Digital de la
              UNAM. ©Todos los derechos reservados 2024. Hecho en México. Este
              sitio puede ser reproducido con fines no lucrativos, siempre y
              cuando no se mutile, se cite la fuente completa y su dirección
              electrónica, de otra forma, se requiere permiso previo por escrito
              de la Institución.
            </p>
            <p>
              Al navegar en este sitio, encontrará contenidos diseñados por
              académicos de la UNAM, denominados Recursos Educativos Abiertos
              (REA), disponibles para todo el público en forma gratuita. Los
              contenidos de cada REA son responsabilidad exclusiva de sus
              autores y no tienen impedimento en materia de propiedad
              intelectual; asimismo, no contienen información que por su
              naturaleza pueda considerarse confidencial y reservada.
            </p>
            <p>
              Los REA podrán ser utilizarlos sin fines de lucro, citando
              invariablemente la fuente y sin alterar la obra, respetando los
              términos institucionales de uso y los derechos de propiedad
              intelectual de terceros.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterBlock;
