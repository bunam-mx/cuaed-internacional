function HeaderBlock() {
  return (
    <header className="bg-cuaed-white fixed w-full top-0">
      <div className="container mx-auto py-2 pb-0 sm:pb-2">
        <div className="lg:flex text-center lg:text-left">
          <div className="lg:w-2/5 content-center">
            <ul className="align-middle">
              <li className="inline-block mx-2 align-bottom">
                <a
                  href="https://www.unam.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="unam-logo.png" alt="UNAM" width={45} />
                </a>
              </li>
              <li className="inline-block mx-2 align-bottom">
                <a
                  href="https://cuaed.unam.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="cuaed-logo.png" alt="CUAED" width={167} />
                </a>
              </li>
              <li className="inline-block mx-2 align-bottom">
                <a
                  href="https://internaciona.cuaed.unam.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="cuaed-internacional-logo.png" alt="CUAED Internacional" width={60} />
                </a>
              </li>
            </ul>
          </div>
          <nav className="lg:w-3/5 text-center lg:text-right content-center bg-cuaed-blue lg:bg-transparent mt-2 lg:mt-0 py-2 lg:py-0 text-cuaed-white lg:text-cuaed-blue text-sm">
            <ul>
              <li className="inline-block mx-2 align-bottom"><a href="/">Inicio</a></li>
              <li className="inline-block mx-2 align-bottom"><a href="#coil">COIL</a></li>
              <li className="inline-block mx-2 align-bottom"><a href="#ghc">GHC</a></li>
              <li className="inline-block mx-2 align-bottom"><a href="#movility">Movilidad</a></li>
              <li className="inline-block mx-2 align-bottom"><a href="#coilers">COILers</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default HeaderBlock;
